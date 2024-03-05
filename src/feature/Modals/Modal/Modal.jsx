import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modals/ModalElements/ModalCloseButton";
import { ModalContainer } from "feature/Modals/ModalElements/ModalContainer";
import { ModalDim } from "feature/Modals/ModalElements/ModalDim";
import { ModalTitle } from "feature/Modals/ModalElements/ModalTitle";

export function Modal({ isOpenModal, children, title, handleModalClose }) {
  if (!isOpenModal) {
    return <></>;
  }
  return (
    <ModalPortal>
      <ModalDim onClick={handleModalClose} />
      <ModalContainer>
        <ModalCloseButton handleModalClose={handleModalClose} />
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </ModalPortal>
  );
}
