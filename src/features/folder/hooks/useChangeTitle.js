import { useState } from "react"

function useChangeTitle() {
  const [title, setTitle] = useState("전체")
  const onChangeTitle = (selectedName) => setTitle(selectedName)

  return { title, onChangeTitle }
}

export default useChangeTitle
