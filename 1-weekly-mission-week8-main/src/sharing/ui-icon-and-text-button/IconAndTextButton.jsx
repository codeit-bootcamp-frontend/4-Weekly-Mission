import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { DeleteFolder } from "modal/delete-folder";
import { Edit } from "modal/edit";
import { Share } from "modal/share";
const cx = classNames.bind(styles);

export const IconAndTextButton = ({ myFolder, iconSource, text }) => {
  const [isEnable, setEnable] = useState(false);
  const [isEnable2, setEnable2] = useState(false);
  const [isEnable3, setEnable3] = useState(false);

  const handleMouseClick = () => {
    if (text === "삭제") {
      setEnable(!isEnable);
    }
    if (text === "이름 변경") {
      setEnable2(!isEnable2);
    }
    if (text === "공유") {
      setEnable3(!isEnable3);
    }
  };

  return (
    <div>
      <button className={cx("container")} onClick={handleMouseClick}>
        <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
        <span className={cx("text")}>{text}</span>
      </button>
      {isEnable && (
        <DeleteFolder
          handleMouseClick={handleMouseClick}
          folderName={myFolder.name}
        />
      )}
      {isEnable2 && (
        <Edit handleMouseClick={handleMouseClick} folderName={myFolder.name} />
      )}
      {isEnable3 && (
        <Share handleMouseClick={handleMouseClick} folder={myFolder} />
      )}
    </div>
  );
};
