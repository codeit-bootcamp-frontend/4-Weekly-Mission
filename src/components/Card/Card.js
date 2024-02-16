import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import card6 from './images/card6.png';
import card7 from './images/card7.png';
import card8 from './images/card8.png';
import card9 from './images/card9.png';
import './Card.css';

const CARD_IMAGES = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
export default function Card({ num = 1 }) {
  const src = CARD_IMAGES[num - 1];
  const alt = `card${num}`;
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <div className="cardTextArea">
        <p className="uploadTime">10 minutes ago</p>
        <p className="cardText">Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat....</p>
        <p className="uploadDate">2023. 3. 15</p>
      </div>
    </div>
  );
}
