import close from "../../images/_close.png";
import "./modal.css";
import kakao from "../../images/Kakao.svg";
import facebook from "../../images/modal-Facebook.svg";
import icon from "../../images/modal-link.svg";
import { useEffect } from "react";

function SharedFolder({ toggleModal }) {
  const { Kakao } = window;
  const shareUrl = `${window.location.origin}/shared/${1}`;

  useEffect(() => {
    if (window.Kakao) {
      Kakao.init("YOUR_KAKAO_APP_KEY");
    }
  }, []);

  function copyToClipboard() {
    const link = "https://your-shared-link.com";
    navigator.clipboard.writeText(link).then(
      function () {
        alert("링크가 클립보드에 복사되었습니다: " + link);
      },
      function () {
        alert("링크 복사에 실패했습니다.");
      }
    );
  }

  const shareKakao = () => {
    if (window.Kakao && Kakao.Share) {
      Kakao.Share.sendDefault({
        objectType: "text",
        text: "세상에 모든 정보를 쉽게 저장하고 관리해보세요",
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      });
    } else {
      alert("Kakao SDK가 로드되지 않았거나 초기화되지 않았습니다.");
    }
  };

  function shareToFacebook() {
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(facebookLink, "_blank");
  }

  return (
    <div className="modal">
      <form className="modal-form">
        <div className="modal-form-content">
          <img
            onClick={toggleModal}
            className="modal-form-img"
            src={close}
            alt="닫기"
          />
          <div className="modal-form-title-box">
            <p className="modal-form-sharedFolder">폴더 공유</p>
            <p className="modal-form-folderName">폴더명</p>
          </div>
          <div className="modal-icon-box">
            <div className="modal-icon-content" onClick={shareKakao}>
              <div className="modal-kakaoIcon-img">
                <img src={kakao} alt="카카오톡"></img>
              </div>
              <p className="modal-icon-title">카카오톡</p>
            </div>
            <div className="modal-icon-content" onClick={shareToFacebook}>
              <div className="modal-facebookIcon-img">
                <img src={facebook} alt="페이스북"></img>
              </div>
              <p className="modal-icon-title">페이스북</p>
            </div>
            <div className="modal-icon-content" onClick={copyToClipboard}>
              <div className="modal-linkIcon-img">
                <img src={icon} alt="링크"></img>
              </div>
              <p className="modal-icon-title">링크 복사</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SharedFolder;
