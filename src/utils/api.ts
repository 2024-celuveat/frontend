import axios from 'axios';

export const api =
  typeof window === 'undefined'
    ? axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL,
      })
    : axios.create({
        withCredentials: true,
      });
