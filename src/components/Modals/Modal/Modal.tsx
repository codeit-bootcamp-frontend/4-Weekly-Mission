import ModalPortal from "setting-files/Portal";
import { ModalCloseButton } from "components/Modals/ModalElements/ModalCloseButton";
import { ModalContainer } from "components/Modals/ModalElements/ModalContainer";
import { ModalDim } from "components/Modals/ModalElements/ModalDim";
import { ModalTitle } from "components/Modals/ModalElements/ModalTitle";

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
