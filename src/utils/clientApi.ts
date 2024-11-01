import { getCookie, isCookieExist } from './cookie';

export const clientApi = async <T>(
  url: string,
  options?: Omit<RequestInit, 'body'> & { data?: unknown },
): Promise<T> => {
  const headers: RequestInit['headers'] = {};
  if (isCookieExist('accessToken')) {
    headers.Authorization = `Bearer ${getCookie('accessToken')}`;
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
      ...headers,
    },
    body: JSON.stringify(options?.data),
  });

  if (response.status === 401) {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.reload();
  }

  const contentType = response.headers.get('content-type');
  if (contentType === 'application/json') return response.json();
  if (contentType === 'text') return (await response.text()) as T;
  return null as T;
};
