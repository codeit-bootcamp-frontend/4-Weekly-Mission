import { useState, MouseEvent } from "react"

function useToggle() {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = (event: MouseEvent | Event) => {
    event && event.preventDefault()
    setToggle((prevToggle) => !prevToggle)
  }

  const openToggleHandler = (event: MouseEvent) => {
    event.preventDefault()
    setToggle(true)
  }

  const closeToggleHandler = () => setToggle(false)

  return {
    toggle,
    openToggleHandler,
    closeToggleHandler,
    toggleHandler,
  }
}

export default useToggle
