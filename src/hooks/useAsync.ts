import { Folder, FolderInfo } from "@types";
import { useState } from "react";

type Error = {
  message: string;
  stack: string;
};

export function useAsync<T extends (...args: any[]) => Promise<D>, D>(
  callback: T
) {
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

  //이 부분 중요
  return [pending, error, wrappedFunction] as const;
}
