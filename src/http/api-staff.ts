import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { STAFF } = API_ENDPOINTS;

export const ApiStaff = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: STAFF.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOne: (id: string | number) => {
    return API({
      path: STAFF.FIND_ONE,
      method: 'GET',
      pathParams: { id },
    });
  },
};
