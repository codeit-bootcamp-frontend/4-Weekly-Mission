import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";
import { DEFAULT_PROFILE } from "util/constant";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("users/1");
  const { loading, error, data } = useAsync(getUser);
  const userData = data ? data?.data[0] : null;
  const formattedData = userData
    ? {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        profileImageSource: userData.image_source || DEFAULT_PROFILE,
      }
    : null;
  return { loading, error, data: formattedData };
};
