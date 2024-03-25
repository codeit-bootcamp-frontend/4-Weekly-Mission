import { useState } from "react"

function useChangeTitle(defaultState: string) {
  const [title, setTitle] = useState(defaultState || "")
  const onChangeTitle = (selectedName: string) => setTitle(selectedName)

  return { title, onChangeTitle }
}

export default useChangeTitle
