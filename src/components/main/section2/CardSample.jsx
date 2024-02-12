import './Card.css';
import cardImgURL1 from '../../../assets/img/cards/img1.jpg';
import cardImgURL2 from '../../../assets/img/cards/img2.jpg';
import cardImgURL3 from '../../../assets/img/cards/img3.jpg';
import cardImgURL4 from '../../../assets/img/cards/img4.jpg';
import cardImgURL5 from '../../../assets/img/cards/img5.jpg';
import cardImgURL6 from '../../../assets/img/cards/img6.jpg';
import cardImgURL7 from '../../../assets/img/cards/img7.jpg';
import cardImgURL8 from '../../../assets/img/cards/img8.jpg';
import cardImgURL9 from '../../../assets/img/cards/img9.jpg';

const CARD_IMG_URL = [
  cardImgURL1,
  cardImgURL2,
  cardImgURL3,
  cardImgURL4,
  cardImgURL5,
  cardImgURL6,
  cardImgURL7,
  cardImgURL8,
  cardImgURL9,
];

// const CARD_IMG_URL = CARD_NUMBERS.map((num) => `cardImgURL${num}`);

function CardSample({ number }) {
  const src = CARD_IMG_URL[number];
  return (
    <div className="cardimg-wrapper">
      <img className="cardimg" src={src} alt={`card ${number}`} />
    </div>
  );
}

export default CardSample;
