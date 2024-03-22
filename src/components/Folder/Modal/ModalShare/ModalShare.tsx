import React, { MouseEvent } from "react";
import * as S from "../ModalStyled.tsx";
import * as STYLE from "./ModalShareStyled.tsx";

interface ModalShareProps {
  setIsShareModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalShare = ({ setIsShareModalOpen }: ModalShareProps) => {
  const handleCloseModal = () => {
    setIsShareModalOpen(false);
  };

  const hostAddress = "https://yourdomain.com"; // 각자 주소 바꾸기
  const shareUrl = `${hostAddress}/shared/${1}`; // id값도 바꾸기
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  const copyToClipboard = (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        alert("링크가 클립보드에 복사되었습니다.");
      },
      (err) => {
        console.error("클립보드 복사 실패:", err);
      }
    );
  };

  return (
    <>
      <S.ModalBackground></S.ModalBackground>
      <S.ModalBox>
        <S.CloseButton onClick={handleCloseModal}>
          <img src="images/close.svg" alt="" />
        </S.CloseButton>
        <S.Items>
          <STYLE.Title>
            <S.ItemsText>폴더 삭제</S.ItemsText>
            <STYLE.ItemsP>폴더명</STYLE.ItemsP>
          </STYLE.Title>
          <STYLE.SNSContent>
            <STYLE.SNS href="/" target="_blank" rel="noopener noreferrer">
              <STYLE.KAKAO src="images/kakao.svg" alt="" />
              <STYLE.SNSP>카카오톡</STYLE.SNSP>
            </STYLE.SNS>
            <STYLE.SNS
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <STYLE.FACEBOOK src="images/facebook.svg" alt="" />
              <STYLE.SNSP>페이스북</STYLE.SNSP>
            </STYLE.SNS>
            <STYLE.SNS
              href="/"
              onClick={copyToClipboard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <STYLE.Link src="images/link.svg" alt="" />
              <STYLE.SNSP>링크 복사</STYLE.SNSP>
            </STYLE.SNS>
          </STYLE.SNSContent>
        </S.Items>
      </S.ModalBox>
    </>
  );
};

export default ModalShare;
