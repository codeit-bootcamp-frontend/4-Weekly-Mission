import "./Card.css";
import getElapsedTime from "../../util/getElapsedTime";
import LinkbraryLogo from "../../asset/images/logo.svg";

const Card = ({ createdAt, description, imageSource }) => {
  const elapsedTime = getElapsedTime(createdAt);

  return (
    <div className="Card">
      <div className="Card__thumb-box">
        {imageSource ? (
          <img
            className="Card__thumb"
            src={imageSource}
            alt="링크 미리보기 이미지"
          />
        ) : (
          <div className="Card__noImage">
            <img src={LinkbraryLogo} alt="링크 미리보기 이미지 없음" />
          </div>
        )}
      </div>
      <div className="Card__desc">
        <span className="Card__desc-elapsedTime">{elapsedTime}</span>
        <p className="Card__desc-text">{description}</p>
        <span className="Card__desc-createdAt">{createdAt.split("T", 1)}</span>
      </div>
    </div>
  );
};

export default Card;
