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
      //                                         target이 any로 바뀜, as로 바꾸는게 더 좋으려나..(질문하기)
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
