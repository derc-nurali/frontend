import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { ACHIEVEMENTS } = API_ENDPOINTS;

export const ApiAchievements = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: ACHIEVEMENTS.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOneById: (id: number, params: Record<string, any>) => {
    return API({
      path: ACHIEVEMENTS.FIND_ONE,
      method: 'GET',
      pathParams: { id },
      params,
    });
  },
};
