import close from "../../images/_close.png";
import "./modal.css";
import kakao from "../../images/Kakao.svg";
import facebook from "../../images/modal-Facebook.svg";
import icon from "../../images/modal-link.svg";

function SharedFolder({ toggleModal }) {
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
            <div className="modal-icon-content">
              <div className="modal-kakaoIcon-img">
                <img src={kakao} alt="카카오톡"></img>
              </div>
              <p className="modal-icon-title">카카오톡</p>
            </div>
            <div className="modal-icon-content">
              <div className="modal-facebookIcon-img">
                <img src={facebook} alt="페이스북"></img>
              </div>
              <p className="modal-icon-title">페이스북</p>
            </div>
            <div className="modal-icon-content">
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
