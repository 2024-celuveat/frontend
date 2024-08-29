'use server';

import { cookies } from 'next/headers';

export const api = {
  get: async <T>(url: string, options?: Omit<RequestInit, 'method'>): Promise<T> => {
    const headers: RequestInit['headers'] = {};
    if (cookies().has('accessToken')) {
      headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
      ...options,
      headers: { ...options?.headers, ...headers },
    });
    if (!response) return {} as T;
    return await response.json();
  },

  post: async <T>(url: string, options?: Omit<RequestInit, 'method'>): Promise<T> => {
    const headers: RequestInit['headers'] = {};
    if (cookies().has('accessToken')) {
      headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
      ...options,
      method: 'POST',
      headers: { ...options?.headers, ...headers },
    });
    if (!response) return {} as T;
    return await response.json();
  },

  delete: async <T>(url: string, options?: Omit<RequestInit, 'method'>): Promise<T> => {
    const headers: RequestInit['headers'] = {};
    if (cookies().has('accessToken')) {
      headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
      ...options,
      method: 'DELETE',
      headers: { ...options?.headers, ...headers },
    });
    if (!response) return {} as T;
    return await response.json();
  },

  put: async <T>(url: string, options?: Omit<RequestInit, 'method'>): Promise<T> => {
    const headers: RequestInit['headers'] = {};
    if (cookies().has('accessToken')) {
      headers['Authorization'] = `Bearer ${cookies().get('accessToken')?.value}`;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
      ...options,
      method: 'PUT',
      headers: { ...options?.headers, ...headers },
    });
    if (!response) return {} as T;
    return await response.json();
  },
};
