import React from "react";
import ButtonCta from "../Cta/buttonCta";
import style from "./addLink.module.scss";
import linkAdd from "../../../public/images/linkImg.svg";
import Image from "next/image";

function AddLink() {
  return (
    <div className={style.addLink}>
      <div className={style.frame}>
        <div className={style.frameLink}>
          <Image src={linkAdd} alt="link add" />
          <p>링크를 추가해보세요</p>
        </div>
        <ButtonCta src="http://codeit.kr" className={style.cta}>
          추가하기
        </ButtonCta>
      </div>
    </div>
  );
}
export default AddLink;
