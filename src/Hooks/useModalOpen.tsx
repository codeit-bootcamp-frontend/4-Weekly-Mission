import { Dispatch, SetStateAction, useState } from "react";

interface ModalState {
  isOpen: boolean;
  clickValue: string;
  handleModalOpen: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setClickValue: Dispatch<SetStateAction<string>>;
}

const useModalOpen = (): ModalState => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickValue, setClickValue] = useState<string>("");

  const handleModalOpen = (): void => {
    setIsOpen(true);
  };

  return {
    handleModalOpen,
    isOpen,
    setIsOpen,
    clickValue,
    setClickValue,
  };
};

export default useModalOpen;
