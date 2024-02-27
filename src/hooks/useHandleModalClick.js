import { useEffect } from "react";

export default function useHandleModalClick(modalRef, handleModalClose) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(modalRef.current);
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("asdf");
        //이 부분 잘 한걸까..
        if (
          modalRef.current.id === "popOver" &&
          event.target.id === "moreBtn"
        ) {
          console.log("asdfasdjfla;ksdjf;l");
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
