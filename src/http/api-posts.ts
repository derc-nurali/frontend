import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { POSTS } = API_ENDPOINTS;

export const ApiPosts = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: POSTS.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOne: (id: string | number, params?: Record<string, any>) => {
    return API({
      path: POSTS.FIND_ONE,
      method: 'GET',
      pathParams: { id },
      params,
    });
  },
};
