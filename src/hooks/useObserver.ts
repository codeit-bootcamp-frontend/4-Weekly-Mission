import { useRef, useEffect, useState, RefObject } from 'react'
interface useObserverReturn {
  HeaderRef: RefObject<HTMLDivElement>
  isOver: boolean
}
// IntersectionObserver를 사용하는 훅
const useObserver = (): useObserverReturn => {
  const HeaderRef = useRef<HTMLDivElement>(null)
  const [isOver, setIsOver] = useState<boolean>(false)

  useEffect(() => {
    const target = HeaderRef.current

    const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
      setIsOver(!entry.isIntersecting)
    }

    const io = new IntersectionObserver(observerCallback, {
      root: null, // 뷰포트를 기준으로 관찰
      threshold: 0, // 뷰포트 벗어나면 콜백 ㄱ
    })

    if (target) {
      io.observe(target)
    }

    return () => {
      if (target) {
        io.unobserve(target)
      }
    }
  }, [])

  return { HeaderRef, isOver }
}

export default useObserver
//import { useRef, useEffect, ReactNode, useState } from 'react'
// const useObserver = () => {
//   const HeaderRef = useRef(null)
//   const [cssName, setCssName] = useState('normal')

//   useEffect(() => {
//     const target = HeaderRef.current
//     const io = new IntersectionObserver(
//       ([entry]) => {

//       },
//       {
//         root: null,
//         threshold: 0,
//       },
//     )

//     if (target) {
//       io.observe(target)
//     }
//     return () => {
//       if (target) {
//         io.unobserve(target)
//       }
//       {
//         cssName
//       }
//     }
//   }, [])
// }
// export default useObserver
