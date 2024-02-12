import card1 from '../images/shared/card/1.png';
import card2 from '../images/shared/card/2.png';
import card3 from '../images/shared/card/3.png';
import card4 from '../images/shared/card/4.png';
import card5 from '../images/shared/card/5.png';
import card6 from '../images/shared/card/6.png';
import card7 from '../images/shared/card/7.png';
import card8 from '../images/shared/card/8.png';
import card9 from '../images/shared/card/9.png';
import '../style/card.css';

const CARD_IMAGES = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
export default function Card({ num = 1 }) {
  const src = CARD_IMAGES[num - 1];
  const alt = `card${num}`;
  return (
    <div>
      <img src={src} alt={alt} />
      <p>10 minutes ago</p>
      <p>Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat....</p>
      <p>2023. 3. 15</p>
    </div>
  );
}
