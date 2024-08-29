import { apiClient } from './instance';

export const getProfile = async (): Promise<boolean> => {
  return await apiClient('/api/user');
};
