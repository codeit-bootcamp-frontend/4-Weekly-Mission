import { mapFolderData } from "util/mapFolderData";
import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";
//
export const useGetFolder = () => {
  //axiosInstance 함수의 baseURL 뒤에 붙일 주소를 입력해서 get요청을 받아오는 getUser 함수를 선언하고 있다.
  const getUser = () => axiosInstance.get("sample/folder");
  //useAsync함수를 통해서 getUser의 실행 결과값을 세가지로 나누어서 저장하고 있다.
  const { loading, error, data } = useAsync(getUser);
  //getUser함수의 결과 데이터를 가진 data 변수를 mapFolderData 함수의 파라미터로 지정하고 있다.
  //옵셔널 체이닝으로 null, undefined인지 확인하고 아니라면 data의 folder파라미터를 전달한다.
  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
