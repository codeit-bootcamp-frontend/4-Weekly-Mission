import style from "./CardListItem.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/Star 1.svg";
import kebabImg from "assets/kebab.svg";
import { useEffect, useState, useRef } from "react";

function CardListItem({ link, setModal, setLink }) {
  const [btnclicked, setBtnClicked] = useState(false);
  const searchRef = useRef(null);

  console.log(link);

  useEffect(() => {
    function handleFocus(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setBtnClicked(false);
      }
    }

    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [searchRef]);

  const handleStarBtnClick = (event) => {
    event.preventDefault();
  };

  const handleKebabBtnClick = (event) => {
    event.preventDefault();
    if (!btnclicked) {
      setBtnClicked(true);
    } else {
      setBtnClicked(false);
    }
  };

  const handleKebabListClick = (event) => {
    event.preventDefault();
  };

  const handleListClick = (e) => {
    const value = e.target.name;
    const seletedLink = e.target.value;

    setModal(value);
    setLink(seletedLink);
    if (btnclicked) {
      setBtnClicked(false);
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      className={style["l_col"]}
      rel="noreferrer"
    >
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource || noImg} alt="card-cover" />:
        </div>
        <button className={style["star-btn"]} onClick={handleStarBtnClick}>
          <img src={starImg} />
        </button>
        <div className={style["link-contents"]}>
          <div className={style["content-Header"]}>
            <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
            <button
              className={style["kebab-btn"]}
              onClick={handleKebabBtnClick}
            >
              <img src={kebabImg} alt="케밥이미지" />
            </button>
          </div>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.createdAt)}</p>
        </div>
      </div>
      <div
        ref={searchRef}
        onClick={handleKebabListClick}
        className={`${style["kebab-list"]} ${
          btnclicked === true ? style.selected : ""
        }`}
      >
        <div className={style.btns}>
          <button
            className={style.listBtn}
            name="deleteLink"
            onClick={handleListClick}
            value={link.url}
          >
            삭제하기
          </button>
          <button
            className={style.listBtn}
            name="addToFolder"
            onClick={handleListClick}
            value=""
          >
            추가하기
          </button>
        </div>
      </div>
    </a>
  );
}

export default CardListItem;
