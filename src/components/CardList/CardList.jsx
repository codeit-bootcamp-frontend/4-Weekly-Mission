import style from "./CardList.module.css";

function CardListItem({ link }) {
  return (
    <div className={style["l_col"]}>
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource} alt="card-cover" />
        </div>
        <div className={style["link-contents"]}>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
        </div>
      </div>
    </div>
  );
}

function CardList({ links }) {
  return (
    <div className={style.wrapper}>
      <ul className={style["l_row"]}>
        {/* 옵셔널 체이닝: 이걸 이용하지 않으면 새로고침시 에러가 발생한다 */}
        {links?.map((link) => (
          <CardListItem key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
