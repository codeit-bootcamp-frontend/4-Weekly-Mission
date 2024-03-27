import { useRef, useState } from "react";

export default function useIntersectionObserver(): [
  (element: HTMLElement) => void,
  (element: HTMLElement) => void,
  boolean
] {
  const [isScrolled, setIsScrolled] = useState(false);

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
      },
      {
        threshold: 1,
      }
    )
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve, isScrolled];
}
