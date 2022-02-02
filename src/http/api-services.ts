import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { SERVICES } = API_ENDPOINTS;

export const ApiServices = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: SERVICES.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOne: (id: string | number, params?: Record<string, any>) => {
    return API({
      path: SERVICES.FIND_ONE,
      method: 'GET',
      pathParams: { id },
      params,
    });
  },
};
