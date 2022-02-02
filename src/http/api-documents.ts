import { API } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { DOCUMENTS } = API_ENDPOINTS;

export const ApiDocuments = {
  fetchAll: (params: Record<string, any>) => {
    return API({
      path: DOCUMENTS.FIND_ALL,
      method: 'GET',
      params,
    });
  },
};
