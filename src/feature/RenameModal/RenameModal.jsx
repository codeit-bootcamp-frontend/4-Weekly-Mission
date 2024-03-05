import { ModalButtonBlue } from "feature/ModalElements/ModalButtonBlue";
import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/ModalElements/ModalCloseButton";
import { ModalContainer } from "feature/ModalElements/ModalContainer";
import { ModalDim } from "feature/ModalElements/ModalDim";
import { ModalTitle } from "feature/ModalElements/ModalTitle";
import { ModalInput } from "feature/ModalElements/ModalInput";

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
