import CardImage from "../CardImage/CardImage";
import CardDescription from "../CardDescription/CardDescription";
import "./CardList.css";

const cardInfo = {
  time: "10 minutes ago",
  text: "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat",
  date: "2023. 3. 15",
};

export const CardList = () => {
  return (
    <div className="CardList">
      <div className="Card">
        <CardImage />
        <CardDescription
          time={cardInfo.time}
          text={cardInfo.text}
          date={cardInfo.date}
        />
      </div>
    </div>
  );
};

export default CardList;
