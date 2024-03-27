import { RefObject, useEffect, useState } from 'react';

const useInterSectionObserver = (ref: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(true);
  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  });
  const element = ref.current;

  useEffect(() => {
    if (element) observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return { isVisible };
};

export default useInterSectionObserver;
