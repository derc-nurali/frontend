import * as dateFunctions from 'date-fns';
import { get, toNumber } from 'lodash';
import slugify from 'slugify';

export const toSlug = (entity: Object, slugKey: string = 'title') => {
  return (
    slugify(get(entity, slugKey), {
      replacement: '-',
      lower: true,
      strict: true,
    }) +
    '-' +
    get(entity, 'id')
  );
};

export const slugToId = (slug: string) => {
  return toNumber(slug.split('-').pop());
};

export const toUrl = (url: string, entity: Object, slugKey: string = 'title') => {
  return url + '/' + toSlug(entity, slugKey);
};

export const formatNumbers = (a: number, thousandsSeparator: string = ' ') => {
  const parts = a.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

  return parts.join(' ');
};

export const chunk = (array: string[], size: number) =>
  array.reduce((acc: any, _: string, idx: number) => {
    if (idx % size === 0) acc.push(array.slice(idx, idx + size));
    return acc;
  }, []);

export const dateParse = (date: Date | null, format = `dd.MM.yyyy`) => {
  return date ? dateFunctions.format(new Date(date), format) : null;
};

export const toUrlWithSearchParams = (url: string, params: Record<string, any>) => {
  const searchParams = Object.keys(params)
    .reduce((urlSearchParams, key) => {
      const param = params[key];

      if (Array.isArray(param)) {
        param.forEach((item) => {
          urlSearchParams.append(key, item);
        });
      } else {
        param && urlSearchParams.append(key, param);
      }
      return urlSearchParams;
    }, new URLSearchParams())
    .toString();
  return searchParams ? [url, searchParams].join('?') : url;
};
