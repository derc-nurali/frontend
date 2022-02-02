import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { ACTIVITIES } = API_ENDPOINTS;

export const ApiActivities = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: ACTIVITIES.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOneById: (id: number, params: Record<string, any>) => {
    return API({
      path: ACTIVITIES.FIND_ONE,
      method: 'GET',
      pathParams: { id },
      params,
    });
  },
};
