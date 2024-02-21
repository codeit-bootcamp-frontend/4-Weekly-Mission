<<<<<<< HEAD
function CreateCard({ items }) {
  return <ul></ul>;
}

export default CreateCard;
=======
import getElapsedTime from "../utils/getElapsedTime";
import CardErrorImage from "../img/CardErrorImage.png";
import StarToggleIcon from "../img/StarToggleIcon.svg";
import Kebab from "../img/kebab.svg";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ folder }) {
  const uploadTime = getElapsedTime(folder.created_at);

  return (
    <div id={folder.id} className="container__card">
      <div className="container__card--imgWrap">
        {folder.image_source && (
          <img
            className="container__card--img"
            src={folder.image_source}
            alt="CardImg"
          />
        )}
        {!folder.image_source && (
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
        {folder.description ? (
          <p className="container__card--description">{folder.description}</p>
        ) : (
          <p className="container__card--description">내용이 없습니다.</p>
        )}

        <p className="container__card--createAt">
          {formatDate(folder.created_at)}
        </p>
        <img className="container__card--kebab" src={Kebab} alt="KebabIcon" />
      </div>
    </div>
  );
}

export default Card;
>>>>>>> part2-김보경-week8
