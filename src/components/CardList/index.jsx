import Card from "components/Card";
import style from "./CardList.module.css";
import { memo } from "react";

export default memo(function CardList({ links }) {
  return (
    <div className={style.wrapper}>
      <ul className={style["l_row"]}>
        {/* 옵셔널 체이닝: 이걸 이용하지 않으면 새로고침시 에러가 발생한다 */}
        {links?.map((link) => (
          <li key={link.id} className={style["l_col"]}>
            <Card link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
});
