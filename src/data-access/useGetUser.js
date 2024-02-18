import { useAsync } from '../util/useAsync';
import { axiosInstance } from 'util/axiosInstance';

export const useGetUser = () => {
  const getUser = () => axiosInstance.get('users/1');
  const { loading, error, data: userData } = useAsync(getUser);
  return { loading, error, userData };
};
