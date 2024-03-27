import { useEffect } from "react";

export const useBackgroundClick = (callback) => {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement?.addEventListener("click", callback);
    return () => {
      rootElement?.removeEventListener("click", callback);
    };
  }, [callback]);
};
