import { useState } from "react"

function useToggle() {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = (event) => {
    event && event.preventDefault()
    setToggle((prevToggle) => !prevToggle)
  }

  const openToggleHandler = () => setToggle(true)

  const closeToggleHandler = () => setToggle(false)

  return {
    toggle,
    openToggleHandler,
    closeToggleHandler,
    toggleHandler,
  }
}

export default useToggle
