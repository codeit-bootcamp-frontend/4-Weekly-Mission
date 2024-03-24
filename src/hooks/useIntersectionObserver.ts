import { useRef } from "react";

export default function useIntersectionObserver(callback: any, options: any) {
  const observer = useRef(
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options)
  );

  const observe = (element: any) => {
    observer.current.observe(element);
  };

  const unobserve = (element: any) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
