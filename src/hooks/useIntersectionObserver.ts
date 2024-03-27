import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options: {}) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = targetRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);

  return { isVisible, targetRef };
}

export default useIntersectionObserver;
