import ModalPortal from "Portal";
import { ModalCloseButton } from "feature/Modals/ModalElements/ModalCloseButton";
import { ModalContainer } from "feature/Modals/ModalElements/ModalContainer";
import { ModalDim } from "feature/Modals/ModalElements/ModalDim";
import { ModalTitle } from "feature/Modals/ModalElements/ModalTitle";
import "./FolderSharedModal.css";

export function FolderSharedModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer>
        <ModalCloseButton />
        <div className="FolderSharedModal-titleContainer">
          <ModalTitle>폴더 공유</ModalTitle>
          <p className="FolderSharedModal-subTitle">폴더명</p>
        </div>
        <div className="FolderSharedModal-sharedButtons">
          <div className="FolderSharedModal-button">
            <div className="FolderSharedModal-kakaoTalkIcon" />
            <p className="FolderSharedModal-iconText">카카오톡</p>
          </div>
          <div className="FolderSharedModal-button">
            <div className="FolderSharedModal-faceBookIcon" />
            <p className="FolderSharedModal-iconText">페이스북</p>
          </div>
          <div className="FolderSharedModal-button">
            <div className="FolderSharedModal-copyLinkIcon" />
            <p className="FolderSharedModal-iconText">링크 복사</p>
          </div>
        </div>
      </ModalContainer>
    </ModalPortal>
  );
}
