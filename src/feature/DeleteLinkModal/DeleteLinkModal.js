import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modal/ModalCloseButton";
import { ModalContainer } from "feature/Modal/ModalContainer";
import { ModalDim } from "feature/Modal/ModalDim";
import { ModalTitle } from "feature/Modal/ModalTitle";
import "./DeleteLinkModal.css";
import { ModalButtonRed } from "feature/Modal/ModalButtonRed";

export function DeleteLinkModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer>
        <ModalCloseButton />
        <div className="DeleteLinkModal-titleContainer">
          <ModalTitle>링크 삭제</ModalTitle>
          <p className="DeleteLinkModal-subTitle">https://www.abc.com</p>
        </div>
        <ModalButtonRed type="button">삭제하기</ModalButtonRed>
      </ModalContainer>
    </ModalPortal>
  );
}
