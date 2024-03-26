import { useEffect } from "react";
import { ROOT_ID } from "./constant";

export const useBackgroundClick = (callback: () => void) => {
  useEffect(() => {
    const rootElement = document.getElementById(ROOT_ID) as HTMLElement;
    rootElement?.addEventListener("click", callback);
    return () => {
      rootElement?.removeEventListener("click", callback);
    };
  }, [callback]);
};
