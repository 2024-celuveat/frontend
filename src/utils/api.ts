/* eslint-disable no-param-reassign */
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(({ data }) => data);
api.interceptors.request.use(config => {
  if (typeof window === 'undefined') return config;
  if (localStorage.getItem('accessToken')) {
    config.headers.Authorization = localStorage.getItem('accessToken');
  }
  return config;
});
