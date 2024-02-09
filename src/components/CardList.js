import "./CardList.css";
import Card from "./Card";
import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";
import card4 from "../assets/images/card-4.png";
import card5 from "../assets/images/card-5.png";
import card6 from "../assets/images/card-6.png";
import card7 from "../assets/images/card-7.png";
import card8 from "../assets/images/card-8.png";
import card9 from "../assets/images/card-9.png";

function CardList() {
  return (
    <div className="card-list grid width-full">
      <Card src={card1} alt="card1" />
      <Card src={card2} alt="card2" />
      <Card src={card3} alt="card3" />
      <Card src={card4} alt="card4" />
      <Card src={card5} alt="card5" />
      <Card src={card6} alt="card6" />
      <Card src={card7} alt="card7" />
      <Card src={card8} alt="card8" />
      <Card src={card9} alt="card9" />
    </div>
  );
}

export default CardList;
