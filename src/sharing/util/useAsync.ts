import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

// asyncFunction으로부터 반환되는 데이터의 타입을 T로 설정
// 이렇게 하면 useAsync를 사용할 때 해당 타입을 명시적으로 지정할 수 있습니다
export const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  // 데이터 상태의 타입을 T | null로 설정합니다.
  // asyncFunction이 반환하는 데이터 타입에 따라 달라집니다.
  const [data, setData] = useState<T | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response); // response?.data에서 response로 변경, 데이터 처리는 asyncFunction 내부에서 수행되어야 함
      return response;
    } catch (error) {
      setError(error as Error); // error 타입을 Error로 단언(assertion)
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(() => execute()); // execute를 호출하는 콜백으로 전달

  return { execute, loading, error, data };
};
