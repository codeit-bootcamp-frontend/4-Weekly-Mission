import { useState } from "react";

type Error = {
  message: string;
  stack: string;
};

//args의 경우는 any로 해야하지 않나...? -> (질문)
export function useAsync(callback: (...args: any[]) => Promise<any>) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  //args의 타입은? any로?
  const wrappedFunction = async (...args: any[]) => {
    try {
      setPending(true);
      setError(null);
      return await callback(...args);
    } catch (error) {
      setError(error as Error);
    } finally {
      setPending(false);
    }
  };

  //이 부분 중요
  return [pending, error, wrappedFunction] as const;
}
