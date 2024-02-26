import ModalPortal from "Portal";
import { ModalButtonBlue } from "feature/Modal/ModalButtonBlue";
import { ModalCloseButton } from "feature/Modal/ModalCloseButton";
import { ModalContainer } from "feature/Modal/ModalContainer";
import { ModalDim } from "feature/Modal/ModalDim";
import { ModalTitle } from "feature/Modal/ModalTitle";
import "./AddToFolderModal.css";

export function AddToFolderModal() {
  return (
    <ModalPortal>
      <ModalDim />
      <ModalContainer>
        <ModalCloseButton />
        <div className="AddToFolderModal-titleContainer">
          <ModalTitle>폴더에 추가</ModalTitle>
          <p className="AddToFolderModal-subTitle">링크 주소</p>
        </div>
        <div className="AddToFolderModal-folderList">
          <div className="AddToFolderModal-selectFolder">
            <p className="AddToFolderModal-folderName"> 코딩팁</p>
            <span className="AddToFolderModal-folderCount">7개 링크</span>
            <div className="AddToFolderModal-selectFolderIcon" />
          </div>
          <div className="AddToFolderModal-selectFolder">
            <p className="AddToFolderModal-folderName"> 채용 사이트</p>
            <span className="AddToFolderModal-folderCount">12개 링크</span>
            <div className="AddToFolderModal-selectFolderIcon" />
          </div>
          <div className="AddToFolderModal-selectFolder">
            <p className="AddToFolderModal-folderName"> 유용한 글</p>
            <span className="AddToFolderModal-folderCount">30개 링크</span>
            <div className="AddToFolderModal-selectFolderIcon" />
          </div>
          <div className="AddToFolderModal-selectFolder">
            <p className="AddToFolderModal-folderName"> 나만의 장소</p>
            <span className="AddToFolderModal-folderCount">3개 링크</span>
            <div className="AddToFolderModal-selectFolderIcon" />
          </div>
        </div>
        <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
      </ModalContainer>
    </ModalPortal>
  );
}
