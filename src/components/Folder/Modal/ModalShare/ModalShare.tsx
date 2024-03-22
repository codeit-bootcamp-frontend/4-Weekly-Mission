import React, { MouseEvent } from "react";
import "./ModalShare.css";

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
      <div className="modal-bg"></div>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <img src="images/close.svg" alt="" />
        </button>
        <div className="modal-items">
          <div className="modal-title">
            <h2>폴더 삭제</h2>
            <p>폴더명</p>
          </div>
          <div className="modal-sns-content">
            <a
              href="/"
              className="modal-sns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="kakao" src="images/kakao.svg" alt="" />
              <p>카카오톡</p>
            </a>
            <a
              className="modal-sns"
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="facebook" src="images/facebook.svg" alt="" />
              <p>페이스북</p>
            </a>
            <a
              href="/"
              onClick={copyToClipboard}
              className="modal-sns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="link" src="images/link.svg" alt="" />
              <p>링크 복사</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalShare;
