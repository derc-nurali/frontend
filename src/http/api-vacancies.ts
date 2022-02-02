import { API, API_UPLOAD } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { VACANCIES } = API_ENDPOINTS;

export const ApiVacancies = {
  postVacancy: (data: any) => {
    return API_UPLOAD({
      path: VACANCIES.POST_VACANCY,
      method: 'POST',
      data,
    });
  },
  subscribeEmail: (data: any) => {
    return API({
      path: VACANCIES.SUBSCRIBE_EMAIL,
      method: 'POST',
      data,
    });
  },
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: VACANCIES.FIND_ALL,
      method: 'GET',
      params,
    });
  },
  fetchOneById: (id: number, params: Record<string, any>) => {
    return API({
      path: VACANCIES.FIND_ONE,
      method: 'GET',
      pathParams: { id },
      params,
    });
  },
};
