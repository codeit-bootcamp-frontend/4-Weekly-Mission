// import "./css/Main.css";
import style from "./CardBox.module.css";
import Card from "./Card";

function CardBox({ linksData }) {
  return (
    <div className={style.container}>
      {linksData.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}

export default CardBox;
