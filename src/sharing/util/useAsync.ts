import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

type Links = {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

type MapFolderDataType = {
  id: number;
  name: string;
  owner: Owner;
  links: Links[];
  count: number;
};

type DataType = {
  data?: any; //포기 ..
  email?: string;
  profileImageSource?: string;
  folder: MapFolderDataType;
};

export const useAsync = <T extends DataType | DataType>(
  asyncFunction: () => Promise<any>
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data);
      return response;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
