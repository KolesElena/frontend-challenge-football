import { apiCall } from './apiConfig';
import { User } from '../types';

export const getLogin = (body: User) => apiCall(
  'post', 
  '/login',
   null,
   {
    Accept: 'application/json',
    'Content-Type': 'application/json',
   },
   body
);  

export const getClubs = (token: string) => apiCall(
  'get', 
  '/clubs',
  null,
  {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization':  `Bearer ${token}`
  },
);
