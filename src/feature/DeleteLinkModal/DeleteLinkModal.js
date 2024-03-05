import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/ModalElements/ModalCloseButton";
import { ModalContainer } from "feature/ModalElements/ModalContainer";
import { ModalDim } from "feature/ModalElements/ModalDim";
import { ModalTitle } from "feature/ModalElements/ModalTitle";
import "./DeleteLinkModal.css";
import { ModalButtonRed } from "feature/ModalElements/ModalButtonRed";

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
