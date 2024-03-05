import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/ModalElements/ModalCloseButton";
import { ModalContainer } from "feature/ModalElements/ModalContainer";
import { ModalDim } from "feature/ModalElements/ModalDim";
import { ModalTitle } from "feature/ModalElements/ModalTitle";

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
