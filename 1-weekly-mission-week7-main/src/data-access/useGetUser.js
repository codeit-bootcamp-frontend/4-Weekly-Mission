import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetUser = () => {
  /* 기본 요구사항 - 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된
   “/api/users/1”을 활용해 주세요.
   axiosInstance의 baseURL 주소에서 "sample/user"를 이어붙인 주소로 get 메소드를 보냄 */
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
