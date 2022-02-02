import { API_UPLOAD } from './api-config';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';

const { FEEDBACK } = API_ENDPOINTS;

export const ApiFeedback = {
  createOne: (data: any) => {
    return API_UPLOAD({
      path: FEEDBACK.CREATE_ONE,
      method: 'POST',
      data,
    });
  },
};
