import { dateDiffCalc, dateFormatter } from "../util/datecalc";
import emptyLogo from "../images/emptylogo.svg";

function Card({ card }) {
  const cardImage = card.imageSource ? card.imageSource : emptyLogo;
  const dateOfCard = new Date(card.createdAt);
  const dateDiff = dateDiffCalc(dateOfCard);
  const formatDate = dateFormatter(dateOfCard);

  const moveToUrl = () => {
    window.open(card.url, "_blank");
  };

  return (
    <div className="card-container" onClick={moveToUrl}>
      <img className="card-container-img" src={cardImage} alt="이미지"></img>
      <div className="card-container-texts">
        <div className="card-container-dateDiff">
          <div>{dateDiff}</div>
        </div>
        <div className="card-container-description">{card.description}</div>
        <div className="card-conatiner-formatDate">{formatDate}</div>
      </div>
    </div>
  );
}

export default Card;
