import { dateDiffCalc, dateFormatter } from "../util/datecalc";
import emptyLogo from "../images/emptylogo.svg";
import kebab from "../images/kebab.svg";
import useToggle from "../hooks/useToggle";
import star from "../images/star.svg";

function SelectMenu() {
  return (
    <div className="selectMenu-container">
      <div className="selectMenu">삭제하기</div>
      <div className="selectMenu clicked">폴더에 추가</div>
    </div>
  );
}

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
      <div className="card-container" onClick={moveToUrl}>
        <img className="card-container-img" src={cardImage} alt="이미지"></img>
        <img className="star" src={star} alt="star" />
        <div className="card-container-texts">
          <div className="card-container-dateDiff">
            <div>{dateDiff}</div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                KebabTogglefunc();
              }}
            >
              <img src={kebab} alt="kebab" />
              {kebabValue ? <SelectMenu /> : null}
            </div>
          </div>
          <div className="card-container-description">{link.description}</div>
          <div className="card-conatiner-formatDate">{formatDate}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
