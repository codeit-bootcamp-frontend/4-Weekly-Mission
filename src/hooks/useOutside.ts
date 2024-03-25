import { useEffect, useRef } from "react"

type HandleToggle = (event: MouseEvent) => void

export default function useOutside<T>(isToggle: boolean, handleToggle: HandleToggle) {
  const toggleRef = useRef<T>(null)

  useEffect(() => {
    const handleCloseKekbab = (event: MouseEvent) => {
      if (isToggle && toggleRef.current && !(toggleRef.current as any).contains(event.target)) {
        handleToggle(event)
      }
    }

    document.addEventListener("mousedown", handleCloseKekbab)
    return () => {
      document.removeEventListener("mousedown", handleCloseKekbab)
    }
  }, [handleToggle, isToggle])

  return toggleRef
}
