import ModalPortal from "Portal";
import { ModalButtonBlue } from "feature/Modal/ModalButtonBlue";
import { ModalCloseButton } from "feature/Modal/ModalCloseButton";
import { ModalContainer } from "feature/Modal/ModalContainer";
import { ModalDim } from "feature/Modal/ModalDim";
import { ModalInput } from "feature/Modal/ModalInput";
import { ModalTitle } from "feature/Modal/ModalTitle";

export function AddFolderModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer>
        <ModalCloseButton />
        <ModalTitle>폴더 추가</ModalTitle>
        <ModalInput type="text"></ModalInput>
        <ModalButtonBlue type="button">추가하기</ModalButtonBlue>
      </ModalContainer>
    </ModalPortal>
  );
}
