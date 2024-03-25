import { useCallback, useEffect, useRef, useState } from "react"

export default function useIntersection<T extends HTMLElement>(options: IntersectionObserverInit) {
  const [visible, setVisible] = useState(true)
  const ref = useRef<T>(null)

  const callback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => setVisible(entry.isIntersecting))
  }, [])

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback, options)
    const currentElement = ref.current
    observer.observe(currentElement)
    return () => {
      if (currentElement) observer.unobserve(currentElement)
      observer.disconnect()
    }
  }, [callback, options])

  return { ref, visible }
}
