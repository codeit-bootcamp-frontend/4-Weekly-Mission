import React from "react";
import Cta from "../Cta/Cta";
import style from "./addLink.module.scss";
import linkAdd from "../../assets/linkImg.svg";
import classNames from "classnames/bind";

function AddLink() {
  const cx = classNames.bind(style);

  return (
    <div className={cx(`addLink`)}>
      <div className={cx(`frame`)}>
        <div className={cx(`frameLink`)}>
          <img src={linkAdd} alt="link add" />
          <p>링크를 추가해보세요</p>
        </div>
        <Cta className={cx(`cta`)}>추가하기</Cta>
      </div>
    </div>
  );
}
export default AddLink;

// classNames 라이브러리 써봄
