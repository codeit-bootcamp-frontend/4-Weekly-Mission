import { useState } from "react";

type Error = {
  message: string;
  stack: string;
};

type PromiseUnpack<T> = T extends Promise<infer U> ? U : T;

export function useAsync<
  T extends (...args: any[]) => Promise<PromiseUnpack<ReturnType<T>>>
>(callback: T) {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = async (...args: Parameters<T>) => {
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

  return [pending, error, wrappedFunction] as const;
}
