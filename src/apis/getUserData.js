import baseAxios from "./baseAxios.js";
import useAsync from "./useAsync.js";

const useUserData = () => {
  const getUserData = () => baseAxios.get("sample/user");
  const { loading, error, data } = useAsync(getUserData);
  return { loading, error, data };
};

export default useUserData;
