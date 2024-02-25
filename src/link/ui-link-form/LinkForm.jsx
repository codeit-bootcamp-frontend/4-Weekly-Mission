import { Cta } from "sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const LinkForm = () => {
  return (
    <div className={cx("container")}>
      <form className={cx("form")}>
        <div className={cx("input-box")}>
          <img className={cx("icon")} src="images/link.svg" alt="링크 아이콘" />
          <input className={cx("input")} type="text" placeholder="링크를 추가해 보세요" />
        </div>
        <Cta>
          <button className={cx("button")} type="submit">
            추가하기
          </button>
        </Cta>
      </form>
    </div>
  );
};
