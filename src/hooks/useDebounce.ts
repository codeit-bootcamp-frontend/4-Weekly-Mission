import { useEffect, useState } from "react"

const MILLISECOND = 1000

export default function useDebounce(value: string, seconds: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), seconds * MILLISECOND)
    return () => clearTimeout(timer)
  }, [seconds, value])

  return debouncedValue
}
