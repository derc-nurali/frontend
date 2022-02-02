import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { SUBDIVISIONS } = API_ENDPOINTS;

export const ApiSubdivisions = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: SUBDIVISIONS.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOneById: (id: number, params: Record<string, any>) => {
    return API({
      path: SUBDIVISIONS.FIND_ONE,
      method: 'GET',
      pathParams: { id },
      params,
    });
  },
};
