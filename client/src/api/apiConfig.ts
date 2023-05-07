import axios from 'axios';
import { User } from '../types';

export const apiCall = (
  method: string,
  url: string,
  params: any,
  headers: any,
  data?: User,
) => axios({
  method,
  url: `http://localhost:4000${url}`,
  params,
  headers,
  data,
});

export default apiCall;
