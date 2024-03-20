import { useState, useEffect } from 'react';
import { CategoryDataType, FolderDataType, UserDataType } from '../type';

type APIFunc = UserDataType | FolderDataType | CategoryDataType | null;
type APIFucnParm = null | string;

const useAPIData = (
  DataAPI: (param: APIFucnParm) => Promise<APIFunc>,
  APIParameter: string | null = null,
) => {
  const [data, setData] = useState<APIFunc>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAPIData = async () => {
      setIsLoading(true);
      const APIData = await DataAPI(APIParameter);
      setData(APIData);
      setIsLoading(false);
    };
    getAPIData();
  }, [APIParameter, DataAPI]);

  return { data, isLoading };
};

export default useAPIData;
