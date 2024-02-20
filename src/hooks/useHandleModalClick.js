import { useEffect } from "react";

export default function useHandleModalClick(modalRef, handleModalClose) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && modalRef.current !== event.target) {
        console.log("hello");
        handleModalClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, handleModalClose]);
}
