import { useState } from "react";

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickValue, setClickValue] = useState("");

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
    setClickValue(e.target.textContent);
  };

  return {
    handleShowModal,
    showModal,
    setShowModal,
    clickValue,
  };
};
