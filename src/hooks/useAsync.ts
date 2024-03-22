import { Folder, FolderInfo } from "@types";
import { useState } from "react";

type Error = {
  message: string;
  stack: string;
};

type CallbackType<T> = {
  (...args: any[]): Promise<T>;
};

export function useAsync<D>(callback: CallbackType<D>) {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = async (...args: Parameters<CallbackType<D>>) => {
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
