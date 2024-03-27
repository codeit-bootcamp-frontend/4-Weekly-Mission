import { useEffect } from "react";

interface Callback {
  (): void;
}

export const useEffectOnce = (callback: Callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
