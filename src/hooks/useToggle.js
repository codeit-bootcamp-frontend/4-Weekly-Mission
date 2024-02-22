import { useState } from "react"

function useToggle() {
  const [toggle, setToggle] = useState(false)
  const [title, setTitle] = useState("")

  const changeTitile = (text) => setTitle(text)

  const toggleHandler = (event) => {
    event.preventDefault()
    setToggle((prevToggle) => !prevToggle)
  }

  const openToggleHandler = () => setToggle(true)

  const closeToggleHandler = () => setToggle(false)

  return {
    toggle,
    openToggleHandler,
    closeToggleHandler,
    toggleHandler,

    title,
    changeTitile,
  }
}

export default useToggle
