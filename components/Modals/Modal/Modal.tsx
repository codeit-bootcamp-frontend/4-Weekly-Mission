import ModalPortal from "../../../setting-files/Portal";
import { ModalCloseButton } from "../ModalElements/ModalCloseButton";
import { ModalContainer } from "../ModalElements/ModalContainer";
import { ModalDim } from "../ModalElements/ModalDim";
import { ModalTitle } from "../ModalElements/ModalTitle";
import { ModalProps } from "../ModalProp";

export default function Modal({
  isOpenModal,
  children,
  title,
  handleModalClose,
}: ModalProps) {
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
