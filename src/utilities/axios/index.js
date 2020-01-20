import axios from 'axios';
import { getToken } from '../authentication';

export const axiosWithAuth = () => {
  const token = getToken();

  return axios.create({
    headers: {
      Authorization: token || '',
    },
  });
};
