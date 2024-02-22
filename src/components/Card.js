import getElapsedTime from "../utils/getElapsedTime";
import CardErrorImage from "../img/CardErrorImage.png";
import StarToggleIcon from "../img/StarToggleIcon.svg";
import Kebab from "../img/kebab.svg";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ folder }) {
  // folder 구조분해 할당 적용
  const { created_at, description, id, image_source, url } = folder;
  const uploadTime = getElapsedTime(created_at);

  return (
    <div id={id} className="container__card">
      <div className="container__card--imgWrap">
        {image_source && (
          <img
            className="container__card--img"
            src={image_source}
            alt="CardImg"
          />
        )}
        {!image_source && (
          <img
            className="container__card--img"
            src={CardErrorImage}
            alt="CardImg"
          />
        )}
      </div>
      <img
        className="container__card--starToggleIcon"
        src={StarToggleIcon}
        alt="starToggleIcon"
      />
      <div className="container__card--text">
        <p className="container__card--uploadTime">{uploadTime}</p>
        {description ? (
          <p className="container__card--description">{description}</p>
        ) : (
          <p className="container__card--description">내용이 없습니다.</p>
        )}

        <p className="container__card--createAt">{formatDate(created_at)}</p>
        <img className="container__card--kebab" src={Kebab} alt="KebabIcon" />
      </div>
    </div>
  );
}

export default Card;
