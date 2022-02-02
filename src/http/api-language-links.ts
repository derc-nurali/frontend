import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { LANGUAGE_LINKS } = API_ENDPOINTS;

export const ApiLanguageLinks = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: LANGUAGE_LINKS.FIND_ALL,
      pathParams: params,
      method: 'GET',
    });
  },
};
