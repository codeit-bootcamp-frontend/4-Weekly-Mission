import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modal/ModalCloseButton";
import { ModalContainer } from "feature/Modal/ModalContainer";
import { ModalDim } from "feature/Modal/ModalDim";
import { ModalTitle } from "feature/Modal/ModalTitle";
import "./DeleteFolderModal.css";
import { ModalButtonRed } from "feature/Modal/ModalButtonRed";

export function DeleteFolderModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer>
        <ModalCloseButton />
        <div className="DeleteFolderModal-titleContainer">
          <ModalTitle>폴더 삭제</ModalTitle>
          <p className="DeleteFolderModal-subTitle">폴더명</p>
        </div>
        <ModalButtonRed type="button">삭제하기</ModalButtonRed>
      </ModalContainer>
    </ModalPortal>
  );
}
