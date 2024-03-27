import { useEffect, RefObject, BaseSyntheticEvent } from "react";

/**
 *  @hooks
 *  Modal 외부클릭시 handleModalClose 실행
 */

export const useHandleModalClick = (
  modalRef: RefObject<HTMLDivElement>,
  handleModalClose: () => void
) => {
  useEffect(() => {
    // OutSide Click => Modal Close
    const handleClickOutside = (e: BaseSyntheticEvent | MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleModalClose();
      }
    };

    // ESC keydown => Modal Close
    const handleKeyDownEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [modalRef, handleModalClose]);
};
