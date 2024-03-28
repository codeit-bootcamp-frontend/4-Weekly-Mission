import { useEffect, useRef, useState } from 'react';

type callbackType = () => void;

// callback: 정해진 조건을 만족했을 때 호출할 콜백 함수
export default function useIntersectionObserver(callback: callbackType) {
  const [observationTarget, setObservationTarget] = useState(null);

  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      // entry가 뷰포트 안에 없으면 callback 함수 호출
      if (!entry.isIntersecting) {
        callback();
      }
    })
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;

    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
}
