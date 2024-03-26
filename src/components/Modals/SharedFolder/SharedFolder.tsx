import * as S from "./SharedFolderStyled";
import "./SharedFolder";
import { Modal } from "../Modal/Modal";
import { handleCopyClipBoard } from "../../../util/copyClipBoard";
import { useEffect } from "react";
import { DeleteFolderProps } from "../../../interface/ModalProp";

declare global {
  interface Window {
    Kakao: any;
  }
}

const { Kakao } = window;

export function SharedFolder({
  isOpenModal,
  handleModalClose,
  selectFolder,
}: DeleteFolderProps) {
  useEffect(() => {
    Kakao.cleanup();
    console.log("key:", process.env.REACT_APP_KAKAO_KEY);
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log("check!!:", Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
        imageUrl: "https://codingaring-week11-linkbrary.netlify.app",
        link: {
          mobileWebUrl:
            "https://codingaring-week11-linkbrary.netlify.app/folder",
        },
      },
      buttons: [
        {
          title: "Linkbrary",
          link: {
            mobileWebUrl:
              "https://codingaring-week11-linkbrary.netlify.app/folder",
          },
        },
      ],
    });
  };

  https: return (
    <Modal
      title="폴더 공유"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <S.FolderName>{selectFolder}</S.FolderName>
      <S.ButtonContainer>
        <S.SharedButton onClick={shareKakao}>
          <S.KakaoTalkIcon />
          <S.IconText>카카오톡</S.IconText>
        </S.SharedButton>
        <a
          target="_blank"
          href={
            "http://www.facebook.com/sharer/sharer.php?u=" +
            "https://codingaring-week11-linkbrary.netlify.app/folder"
          }
          rel="noreferrer"
        >
          <S.SharedButton>
            <S.FacebookIcon />
            <S.IconText>페이스북</S.IconText>
          </S.SharedButton>
        </a>
        <S.SharedButton
          onClick={() => {
            handleCopyClipBoard(
              "https://codingaring-week11-linkbrary.netlify.app/folder"
            );
          }}
        >
          <S.CopyIcon />
          <S.IconText>링크 복사</S.IconText>
        </S.SharedButton>
      </S.ButtonContainer>
    </Modal>
  );
}
