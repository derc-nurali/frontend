import { get, set, forEach, isEmpty } from 'lodash';
import { LOCALE_UZ } from '../constants/locales.constants';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface PathProps {
  path: string;
  params?: Record<string, any>;
  pathParams?: Record<string, any>;
}

interface ApiProps extends PathProps {
  method: HttpMethod;
  headers?: Record<string, any>;
  data?: any;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BASE_PROJECT = process.env.NEXT_PUBLIC_API_BASE_PROJECT;

const changeParamsLang = (params?: Record<string, any>) => {
  const language = get(params, 'language');
  if (!!params && !isEmpty(params) && language && language === LOCALE_UZ) {
    set(params, 'language', 'oz');
  }
  return params;
};

export const getPath = ({ path, params, pathParams }: PathProps) => {
  forEach(pathParams, (value, key) => {
    path = path.replace(`:${key}`, value);
  });

  let endPoint = `${BASE_URL}${path}`;
  if (path?.includes('https') || path?.includes('http')) endPoint = path;

  if (!isEmpty(params)) return `${endPoint}?${new URLSearchParams(params)}`;
  return endPoint;
};

export const getHeaders = (isFormData: boolean = false) => {
  let headers = { project: BASE_PROJECT };
  const contentType = { 'Content-Type': 'application/json' };
  if (!isFormData) headers = { ...headers, ...contentType };
  return headers;
};

const fetchResult = async (pathname: string, params: Record<string, any>) => {
  const response = await fetch(pathname, params);
  const { status } = response;
  try {
    const parsed = await response.json();
    if (status >= 200 && status < 300) return parsed;
    console.warn(parsed);
    return Promise.reject(parsed);
  } catch (e) {
    if (status >= 200 && status < 300) return { status };
    console.warn({ status });
    return Promise.reject({ status });
  }
};

export const API = async ({
  path,
  method,
  params,
  pathParams,
  data,
  headers: extraHeaders,
}: ApiProps) => {
  const pathname = getPath({ path, params: changeParamsLang(params), pathParams });
  const headers = { ...getHeaders(false), ...extraHeaders };
  const body = JSON.stringify(data);
  return fetchResult(pathname, { method, headers, body });
};

export const API_UPLOAD = async ({ path, method, params, pathParams, data }: ApiProps) => {
  const pathname = getPath({ path, params: changeParamsLang(params), pathParams });
  const headers = getHeaders(true);
  const body = data;
  return fetchResult(pathname, { method, headers, body });
};
