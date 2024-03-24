import { useState } from "react";

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickValue, setClickValue] = useState("");

  const handleShowModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowModal(true);
    const target = e.target as HTMLButtonElement;
    if (target.textContent) setClickValue(target.textContent);
  };

  return {
    handleShowModal,
    showModal,
    setShowModal,
    clickValue,
  };
};
