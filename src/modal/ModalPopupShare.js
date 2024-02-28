import { useState } from "react";
import close from "./image/close.svg";
import kakao from "./image/kakao.svg";
import facebook from "./image/facebook.svg";
import link from "./image/link.svg";
import "./styles/modalPopupShare.css";

function ModalPopupShare(props) {
  const [modalPopupData, setModalPopupData] = useState(props.inputData);
  const handleClickButton = (e) => {
    // props.setInputData(modalPopupData);
    // props.setPopup(false);
    props.setInputData(modalPopupData);
    props.setPopup({
      ...props,
      [e.target.name]: false,
    });
  };
  const blockEvent = (event) => {
    event.stopPropagation();
  };
  // 링크 복사 버튼 클릭시 공유용 링크가 복사되어야 함
  const shareLinkUrl = "https://www.naver.com";
  const copyClipBoard = async (event) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(shareLinkUrl);
    } catch (error) {
      console.error("클립보드에 복사 실패", error);
    }
  };
  return (
    <div className="modal_container">
      <section className="modal_layout" onClick={blockEvent}>
        <img
          className="closeButtonImg"
          src={close}
          alt="closeButton"
          name={props.popupEdit}
          onClick={handleClickButton}
        ></img>
        <div className="modal_title_container">
          <p className="modal_title">폴더 공유</p>
          <p className="modal_sub_title">폴더명</p>
        </div>
        {/* <input
          className="input"
          type="text"
          value={modalPopupData}
          onChange={(e) => setModalPopupData(e.target.value)}
        ></input> */}
        <div className="shared_icons_container">
          <a
            className="shared_icon"
            href={`호스트 주소}/shared/{currrentFolderId`}
          >
            <img
              className="shared_icon_img"
              src={kakao}
              alt="카카오톡 아이콘"
            ></img>
            <span className="shared_icon_text">카카오톡</span>
          </a>
          <a
            className="shared_icon"
            href={`호스트 주소}/shared/{currrentFolderId`}
          >
            <img
              className="shared_icon_img"
              src={facebook}
              alt="페이스북 아이콘"
            ></img>
            <span className="shared_icon_text">페이스북</span>
          </a>
          <a className="shared_icon" href="" onClick={copyClipBoard}>
            <img
              className="shared_icon_img"
              src={link}
              alt="링크복사 아이콘"
            ></img>
            <span className="shared_icon_text">링크 복사</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ModalPopupShare;
