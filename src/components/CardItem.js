import './CardItem.css';

const CardItem = ({ url, title, description, createdAt, imageSource }) => {
  return (
    <div className="CardItem">
      <div className="starArea">
        <div className="starButton" type="button"></div>
      </div>
      <a href={url} className="cardLink">
        <div className="cardImgArea">
          <img src={imageSource} alt={title} />
        </div>
        <div className="cardInfoArea">
          <div className="cardTimeAgo">{createdAt}</div>
          <p className="description">{description}</p>
          <div className="createdAt">{createdAt.slice(0, 10)}</div>
        </div>
      </a>
    </div>
  );
};

export default CardItem;
