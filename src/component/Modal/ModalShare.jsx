import "./ModalShare.css";
import closeBtn from "../../images/close.svg";
import kakaoImg from "../../images/kakao.svg";
import facebookImg from "../../images/facebook.svg";
import linkImg from "../../images/link.svg";

const ModalShare = ({ setIsModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const hostAddress = "https://yourdomain.com"; // 각자 주소 바꾸기
  const shareUrl = `${hostAddress}/shared/${1}`; // id값도 바꾸기
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  const copyToClipboard = (e) => {
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
          <img src={closeBtn} alt="" />
        </button>
        <div className="modal-items">
          <div className="modal-title">
            <h2>폴더 삭제</h2>
            <p>폴더명</p>
          </div>
          <div className="modal-content">
            <a
              href="/"
              className="modal-sns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="kakao" src={kakaoImg} alt="" />
              <p>카카오톡</p>
            </a>
            <a
              className="modal-sns"
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="facebook" src={facebookImg} alt="" />
              <p>페이스북</p>
            </a>
            <a
              href="/"
              onClick={copyToClipboard}
              className="modal-sns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="link" src={linkImg} alt="" />
              <p>링크 복사</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalShare;
