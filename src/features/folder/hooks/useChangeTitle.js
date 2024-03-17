import { useState } from "react"

function useChangeTitle(defaultState) {
  const [title, setTitle] = useState(defaultState || "")
  const onChangeTitle = (selectedName) => setTitle(selectedName)

  return { title, onChangeTitle }
}

export default useChangeTitle
