// import { RefObject, useEffect, useState } from "react";

// interface useIntersectionObserverProps<T> {
//   targetRef: RefObject<T>;
//   threshold?: number;
// }

// export default function useIntersectionObserver({
//   targetRef,
//   threshold = 0.1,
// }: useIntersectionObserverProps<T>): boolean {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   useEffect(() => {
//     // observer 생성
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // 해당 객체가 threshold % 만큼 보이면 true
//           setIsIntersecting(entry.isIntersecting);
//         });
//       },
//       { threshold }
//     );

//     if (targetRef.current) {
//       observer.observe(targetRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [targetRef, threshold]);

//   return isIntersecting;
// }
