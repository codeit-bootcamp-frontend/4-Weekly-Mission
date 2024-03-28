import { useEffect, useRef } from 'react';

interface useIntersectionObserverProps {
  callbackIn?: (() => void) | void;
  callbackOut?: (() => void) | void;
}

// callbackIn: entry.isIntersecting === true 일 때 실행
// callbackOut: entry.isIntersecting === false 일 때 실행
export default function useIntersectionObserver({
  callbackIn = () => {},
  callbackOut = () => {},
}: useIntersectionObserverProps) {
  const observationTargetRef = useRef<HTMLElement | null>(null);

  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      // entry가 뷰포트 안에 있으면 callback 함수 호출
      if (entry.isIntersecting) {
        callbackIn();
      }

      // entry가 뷰포트 안에 없으면 callback 함수 호출
      if (!entry.isIntersecting) {
        callbackOut();
      }
    })
  );

  useEffect(() => {
    const currentTarget = observationTargetRef.current;
    const currentObserver = observer.current;

    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTargetRef]);

  // observationTarget의 current를 직접 수정할 수 있는 함수 반환
  return (node: HTMLElement | null) => {
    observationTargetRef.current = node;
  };
}
