import { dateDiffCalc, dateFormatter } from "../util/datecalc";
import emptyLogo from "../images/emptylogo.svg";
import kebab from "../images/kebab.svg";
import useToggle from "../hooks/useToggle";
import star from "../images/star.svg";
import style from "./Card.module.css";
import SelectMenu from "./SelectMenu";

function Card({ link }) {
  const [kebabValue, KebabTogglefunc] = useToggle(false);
  const cardImage =
    link.imageSource || link["image_source"]
      ? link.imageSource || link["image_source"]
      : emptyLogo;
  const dateOfCard = new Date(link.createdAt || link["created_at"]);
  const dateDiff = dateDiffCalc(dateOfCard);
  const formatDate = dateFormatter(dateOfCard);

  const moveToUrl = () => {
    window.open(link.url, "_blank");
  };

  return (
    <>
      <div className={style.container} onClick={moveToUrl}>
        <div className={style.imgContainer}>
          <img className={style.img} src={cardImage} alt="이미지"></img>
        </div>
        <img className={style.star} src={star} alt="star" />
        <div className={style.textContainer}>
          <div className={style.dateDiffContainer}>
            <div>{dateDiff}</div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                KebabTogglefunc();
              }}
            >
              <img src={kebab} alt="kebab" />
            </div>
          </div>
          <div className={style.description}>{link.description}</div>
          <div>{formatDate}</div>
        </div>
        {kebabValue ? <SelectMenu /> : null}
      </div>
    </>
  );
}

export default Card;
