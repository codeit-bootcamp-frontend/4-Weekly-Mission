import { useEffect } from "react";

export default function useHandleOutsideClick(
  modalRef: React.RefObject<HTMLElement>,
  handleModalClose: () => void
) {
  // React.BaseSyntheticEvent

  useEffect(() => {
    // React.BaseSyntheticEvent로 하면 target이 any가 됨.
    // React.BaseSyntheticEvent | MouseEvent
    const handleClickOutside = (
      event: React.BaseSyntheticEvent | MouseEvent
    ): void => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (
          modalRef.current.id === "popOver" &&
          event.target.id === "moreBtn"
        ) {
          return;
        }
        handleModalClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, handleModalClose]);
}
