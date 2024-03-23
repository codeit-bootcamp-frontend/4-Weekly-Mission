import { Cta } from "sharing/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { FormEvent } from "react";

const cx = classNames.bind(styles);

interface LinkFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
// 이벤트 인수 타입을 중복으로 지정(FormEvent<HTMLFormElement>)하는데 이렇게 하는게 맞나요?
export const LinkForm = ({ onSubmit }: LinkFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
