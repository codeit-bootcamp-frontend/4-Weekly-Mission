import { Cta } from "sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import ContentAdder from "modal/ContentAdder";

const cx = classNames.bind(styles);

export const LinkForm = () => {
  const [modal, setModal] = useState(true);

  const handleOnclick = () => {
    setModal(!modal);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value); // input 값이 변경될 때마다 state 업데이트
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
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>
        <Cta>
          <ContentAdder
            modal={modal}
            handleOnClickClose={handleOnclick}
            value={inputValue}
          />
          <button
            className={cx("button")}
            type="button"
            onClick={handleOnclick}
          >
            추가하기
          </button>
        </Cta>
      </form>
    </div>
  );
};
