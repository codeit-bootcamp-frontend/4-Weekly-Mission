import style from "./CardListItem.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/Star 1.svg";
import kebabImg from "assets/kebab.svg";
import {useEffect, useRef, useState } from "react";

interface Props{
  link: {
    id: number;
    url: string;
    created_at: string;
    image_source :string;
    title:string;
    description:string;
};
  setModal: (value: string) => void;
   setLink: (link: string) => void;
}

function CardListItem({ link, setModal, setLink } :Props) {
  const [btnClicked, setBtnClicked] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleFocus(e: MouseEvent) {
      
      if (searchRef.current && !searchRef.current.contains(e.target as any)) {
        setBtnClicked(false);
      }
    }

    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [searchRef]);

  const handleStarBtnClick = (event : React.MouseEvent) => {
    event.preventDefault();
  };

  const handleKebabBtnClick = (event :React.MouseEvent) => {
    event.preventDefault();
    if (!btnClicked) {
      setBtnClicked(true);
    } else {
      setBtnClicked(false);
    }
  };

  const handleKebabListClick = (event :React.MouseEvent) => {
    event.preventDefault();
  };

  const handleListClick = (e :React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).name;
    const seletedLink = (e.target as HTMLButtonElement).value;

    setModal(value);
    setLink(seletedLink);
    if (btnClicked) {
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
          <img src={link.image_source || noImg} alt="card-cover" />:
        </div>
        <button className={style["star-btn"]} onClick={handleStarBtnClick}>
          <img src={starImg} alt="즐겨찾기 이미지" />
        </button>
        <div className={style["link-contents"]}>
          <div className={style["content-Header"]}>
            <p className={style["link-update"]}>
              {getTimeAgo(link.created_at)}
            </p>
            <button
              className={style["kebab-btn"]}
              onClick={handleKebabBtnClick}
            >
              <img src={kebabImg} alt="케밥이미지" />
            </button>
          </div>
          <h2 className={style["link-title"]}>{link.title || "NAN"}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.created_at)}</p>
        </div>
      </div>
      <div
        ref={searchRef}
        onClick={handleKebabListClick}
        className={`${style["kebab-list"]} ${
          btnClicked === true ? style.selected : ""
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
