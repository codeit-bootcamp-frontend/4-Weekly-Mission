import changeFormatDate from "../../utils/changeFormatDate";
import getElapsedTime from "../../utils/getElapsedTime";
import CardErrorImage from "../../img/CardErrorImage.png";

function Card({ folder }) {
  const createAt = changeFormatDate(folder.createdAt);
  const uploadTime = getElapsedTime(folder.createdAt);

  const CardImage = folder.imageSource || CardErrorImage;

  return (
    <div id={folder.id} key={folder.id} className="container__content">
      <div className="container__content--imgWrap">
        <img
          className="container__content--img"
          src={CardImage}
          alt="CardImg"
        />
      </div>
      <div className="container__content--text">
        <p className="container__content--uploadTime">{uploadTime}</p>
        <p className="container__content--description">{folder.description}</p>
        <p className="container__content--createAt">{createAt}</p>
      </div>
    </div>
  );
}

export default Card;
