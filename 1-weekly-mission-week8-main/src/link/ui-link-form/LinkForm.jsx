import { Cta } from "sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { Add } from "modal/add";
import { useState } from "react";

const cx = classNames.bind(styles);

export const LinkForm = ({ folders }) => {
  const [isEnable, setIsEnable] = useState(false);
  const [isValue, setIsValue] = useState("");

  const handleMouseClick = (event) => {
    event.preventDefault();
    setIsEnable(!isEnable);
  };

  const handleChange = (event) => {
    setIsValue(event.target.value);
  };
  return (
    <div className={cx("container")}>
      <form className={cx("form")}>
        <div className={cx("input-box")}>
          <img className={cx("icon")} src="images/link.svg" alt="링크 아이콘" />
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={isValue}
            onChange={handleChange}
          />
        </div>
        <Cta>
          <button
            className={cx("button")}
            type="submit"
            onClick={handleMouseClick}
          >
            추가하기
          </button>
          {isEnable && (
            <Add
              handleMouseClick={handleMouseClick}
              folders={folders}
              isValue={isValue}
            />
          )}
        </Cta>
      </form>
    </div>
  );
};
