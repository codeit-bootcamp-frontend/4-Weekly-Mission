import { useState } from "react";
import "./Modal.css";
import * as S from "./Modal.style";
import shareKakao from "./KakaoTalkShare";

const { Kakao } = window as any;

function ModalSubFolderNameChange() {
  return (
    <>
      <S.ModalTitle>폴더 이름 변경</S.ModalTitle>
      <form action="submit">
        <S.ModalInput placeholder="내용 입력" type="text" />
        <S.ModalButton>변경하기</S.ModalButton>
      </form>
    </>
  );
}

function ModalAddSubFolder() {
  return (
    <>
      <S.ModalTitle>폴더 추가</S.ModalTitle>
      <form action="submit">
        <S.ModalInput placeholder="내용 입력" type="text" />
        <S.ModalButton>변경하기</S.ModalButton>
      </form>
    </>
  );
}

function ModalShareSubFolder({ modalData }: any) {
  const BASE_URL = "https://animated-kitten-84730c.netlify.app";
  const query = `/shared/${modalData[1]}`;

  const onClickFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + BASE_URL + query
    );
  };

  const handleCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(BASE_URL + query);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };

  return (
    <>
      <S.ModalTitle>
        폴더 공유
        <br />
        <S.ModalCaption>{modalData[0]}</S.ModalCaption>
      </S.ModalTitle>
      <div className="modal-box">
        <div className="modal-share-layout">
          <button
            onClick={() => {
              shareKakao(BASE_URL, query);
            }}
            className="modal-img modal-kakao"
          >
            <img src="Kakao.svg" alt={"linkToKakao"} />
          </button>
          카카오톡
        </div>
        <div className="modal-share-layout">
          <button
            onClick={() => onClickFacebook()}
            className="modal-img modal-facebook"
          >
            <img src="Facebook.svg" alt={"linkToFacebook"} />
          </button>
          페이스북
        </div>
        <div className="modal-share-layout">
          <button
            onClick={() => handleCopyToClipboard()}
            className="modal-img modal-link"
          >
            <img src="link.svg" alt={"linkCopy"} />
          </button>
          링크 복사
        </div>
      </div>
    </>
  );
}

function ModalRemoveSubFolder({ modalData }: any) {
  console.log(modalData);
  return (
    <>
      <S.ModalTitle>
        폴더 삭제 <br />
        <S.ModalCaption>{modalData}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton $errored={true}>삭제하기</S.ModalButton>
    </>
  );
}

function ModalRemoveLink({ modalData }: any) {
  return (
    <>
      <S.ModalTitle>
        링크 삭제 <br />
        <S.ModalCaption>{modalData}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton $errored={true}>삭제하기</S.ModalButton>
    </>
  );
}

function ModalAddLinkToFolder({ modalData }: any) {
  const [targetLink, [favor, ...folderList]] = [...modalData];
  const [SelectedFolder, setSelectedFolder] = useState("");

  const handleSelectFolder = (key: any) => {
    setSelectedFolder(key);
  };

  return (
    <>
      <S.ModalTitle>
        폴더에 추가 <br />
        <S.ModalCaption>{targetLink}</S.ModalCaption>
      </S.ModalTitle>
      <S.ShareButtonLayout>
        {folderList.map((item: any) => (
          <S.Button
            onClick={() => handleSelectFolder(item.name)}
            $state={item.name === SelectedFolder}
            className="modal-sub-folder-btn-list"
            key={item.name}
          >
            <h2>
              {item.name}
              <span>{`${item.length || 0}개 링크`}</span>
            </h2>
            {item.name === SelectedFolder && (
              <img src="check.svg" alt="CheckedFolder" />
            )}
          </S.Button>
        ))}
      </S.ShareButtonLayout>
      <S.ModalButton>추가하기</S.ModalButton>
    </>
  );
}

const Modal = ({
  modalType = "UNKNOWN_TYPE",
  modalFunc = false,
  modalData = false,
  isOpened,
  isOpenedToggle,
}: any) => {
  const renderModal = () => {
    switch (modalType) {
      case "nameChange":
        return <ModalSubFolderNameChange />;

      case "addSubFolder":
        return <ModalAddSubFolder />;

      case "shareFolder":
        return <ModalShareSubFolder modalData={modalData} />;

      case "removeFolder":
        return <ModalRemoveSubFolder modalData={modalData} />;

      case "removeLink":
        return <ModalRemoveLink modalData={modalData} />;

      case "addLinkToFolder":
        return <ModalAddLinkToFolder modalData={modalData} />;

      default:
        throw new Error("검증되지 않은 Modal");
    }
  };

  if (isOpened)
    return (
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalCloseButton type="button" onClick={isOpenedToggle}>
            <img src="modalClose.png" alt="closeModal" />
          </S.ModalCloseButton>

          {renderModal()}
        </S.ModalWrapper>
        ;
      </S.ModalBackground>
    );
};

export default Modal;
