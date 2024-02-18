import { useState } from "react"

function useToggle() {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = (event) => {
    event.preventDefault()
    setToggle((prevToggle) => !prevToggle)
  }

  return {
    toggle,
    toggleHandler,
  }
}

export default useToggle
