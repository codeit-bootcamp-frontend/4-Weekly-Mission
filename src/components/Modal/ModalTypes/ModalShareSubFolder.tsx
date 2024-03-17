import * as S from "../ModalLoader.style";
import shareKakao from "src/components/Utils/KakaoTalkShare";

export default function ModalShareSubFolder({ modalData }: any) {
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
