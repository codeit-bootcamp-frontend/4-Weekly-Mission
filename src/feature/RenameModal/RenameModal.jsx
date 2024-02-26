import { ModalButtonBlue } from "feature/Modal/ModalButtonBlue";
import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modal/ModalCloseButton";
import { ModalContainer } from "feature/Modal/ModalContainer";
import { ModalDim } from "feature/Modal/ModalDim";
import { ModalTitle } from "feature/Modal/ModalTitle";
import { ModalInput } from "feature/Modal/ModalInput";

export function RenameModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer>
        <ModalCloseButton />
        <ModalTitle>폴더 이름 변경</ModalTitle>
        <ModalInput type="text"></ModalInput>
        <ModalButtonBlue type="button">변경하기</ModalButtonBlue>
      </ModalContainer>
    </ModalPortal>
  );
}
