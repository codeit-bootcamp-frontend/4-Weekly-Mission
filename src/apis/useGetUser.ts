import { useAsync } from '@/apis/useAsync';
import { axiosInstance } from '@/apis/axiosInstance';

export const useGetUser = () => {
  const getUser = () => axiosInstance.get('sample/user');
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
