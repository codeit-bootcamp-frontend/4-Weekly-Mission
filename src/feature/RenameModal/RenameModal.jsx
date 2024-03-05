import { ModalButtonBlue } from "feature/Modals/ModalElements/ModalButtonBlue";
import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modals/ModalElements/ModalCloseButton";
import { ModalContainer } from "feature/Modals/ModalElements/ModalContainer";
import { ModalDim } from "feature/Modals/ModalElements/ModalDim";
import { ModalTitle } from "feature/Modals/ModalElements/ModalTitle";
import { ModalInput } from "feature/Modals/ModalElements/ModalInput";

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
