import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card">
      {/* <a href={url} target="_blank" rel="noreferrer"> */}
      <div className="card-image-content">
        <img
          className="card-image"
          src="../assets/logo/google.png"
          alt="대체 카드 이미지!"
        />
      </div>
      <div className="card-content">
        <div className="card-interval-date">얼마나 지났을까?</div>
        <div className="card-description">카드 내용임</div>
        <div className="card-create-date">날짜임</div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default Card;
