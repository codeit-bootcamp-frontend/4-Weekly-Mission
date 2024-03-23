import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import "./ShareModal.css";
import kakaotalkIcon from "../../assets/kakaotalk.svg";
import facebookIcon from "../../assets/facebook.svg";
import copyLinkIcon from "../../assets/copy-link-icon.svg";

interface Props {
  changeFolderShareSelect: () => void;
}

const shareIcons = [
  { title: "카카오톡", src: kakaotalkIcon },
  { title: "페이스북", src: facebookIcon },
  { title: "링크 복사", src: copyLinkIcon },
];

function ShareModal({ changeFolderShareSelect }: Props) {
  return (
    <div className="ShareModal">
      <div className="container">
        <div className="contents">
          <CloseIcon className="close-icon" onClick={changeFolderShareSelect} />
          <h1 className="title">폴더 공유</h1>
          <p className="subtitle">폴더명</p>
          <div className="shareIcons_container">
            {shareIcons.map((icon) => (
              <div className="shareIcon_container">
                <img src={icon.src} />
                <p>{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
