import style from "./CardList.module.css";

function formatDate(createdAt) {
  const date = new Date(createdAt);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function getTimeAgo(createdAt) {
  const date = new Date(createdAt);
  const currentDate = new Date();

  const diffDate = currentDate.getTime() - date.getTime();

  const minutes = Math.floor(diffDate / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 365);

  if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  if (hours < 2) {
    return "1 hour age";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  }

  if (days < 2) {
    return "1 day ago";
  } else if (days < 31) {
    return `${days} days ago`;
  }

  if (months < 2) {
    return "1 month age";
  } else if (months < 12) {
    return `${months} months ago`;
  }

  if (years < 2) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
}

function CardListItem({ link }) {
  return (
    <div className={style["l_col"]}>
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource} alt="card-cover" />
        </div>
        <div className={style["link-contents"]}>
          <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.createdAt)}</p>
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
