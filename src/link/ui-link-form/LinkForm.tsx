import { Cta } from "../../sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { ChangeEvent, MouseEvent } from "react";

const cx = classNames.bind(styles);

interface Props {
  onSubmit: (e: MouseEvent) => void;
}

export const LinkForm = ({ onSubmit }: Props) => {
  const handleSubmit = (event: ChangeEvent) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className={cx("container")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <img className={cx("icon")} src="images/link.svg" alt="링크 아이콘" />
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    </div>
  );
};
