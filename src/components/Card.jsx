import { dateDiffCalc, dateFormatter } from "../util/datecalc";
import emptyLogo from "../images/emptylogo.svg";

function Card({ link }) {
  // console.log(link);
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
    <div className="card-container" onClick={moveToUrl}>
      <img className="card-container-img" src={cardImage} alt="이미지"></img>
      <div className="card-container-texts">
        <div className="card-container-dateDiff">
          <div>{dateDiff}</div>
        </div>
        <div className="card-container-description">{link.description}</div>
        <div className="card-conatiner-formatDate">{formatDate}</div>
      </div>
    </div>
  );
}

export default Card;
