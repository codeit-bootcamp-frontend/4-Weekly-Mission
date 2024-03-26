import kakaoIcon from "../../assets/share-kakao.svg";
import facebookIcon from "../../assets/share-facebook.svg";
import shareLink from "../../assets/share-link.svg";
import "./ModalShare.css";
import linkbrary from "../../assets/Linkbrary.svg";
declare global {
  interface Window {
    Kakao: any;
  }
}

interface ModalShareProps {
  menusId: number;
}
const ModalShare = ({ menusId }: ModalShareProps) => {
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("ac53ae0f1cac43ca6e9eb556442de62d");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Linkbrary",
          description: "",
          imageUrl: linkbrary,
          link: {
            mobileWebUrl: `http://localhost:3000/shared/${menusId}`,
            webUrl: `http://localhost:3000/shared/${menusId}`,
          },
        },
        buttons: [
          {
            title: "자세히 보러 가기",
            link: {
              mobileWebUrl: `http://localhost:3000/shared/${menusId}`,
              webUrl: `http://localhost:3000/shared/${menusId}`,
            },
          },
        ],
      });
    }
  };

  const shareFacebook = () => {
    const sharedLink = encodeURIComponent(
      `http://localhost:3000/shared/${menusId}`
    );
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:3000/shared/${menusId}`
      );
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-share-content">
      <div className="share-area">폴더명</div>
      <div className="share-sns">
        <div className="sns-icon">
          <a onClick={shareKakao}>
            <img src={kakaoIcon} alt="카카오톡" />
          </a>
          <p>카카오톡</p>
        </div>
        <div className="sns-icon">
          <a onClick={shareFacebook}>
            <img src={facebookIcon} alt="페이스북" />
          </a>
          <p>페이스북</p>
        </div>
        <div className="sns-icon">
          <a onClick={handleCopyClipBoard}>
            <img src={shareLink} alt="복사 버튼" />
          </a>
          <p>링크 복사</p>
        </div>
      </div>
    </div>
  );
};

export default ModalShare;
