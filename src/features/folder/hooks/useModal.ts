import { useState } from "react";

export default function useModal(){
  const [modalValue, setModalValue] = useState("")
  const handleOpenModal = (modalValue: string) => setModalValue(modalValue)
  const handleCloseModal = () => setModalValue("")

  return {
    modalValue,
    handleOpenModal,
    handleCloseModal
  }
}