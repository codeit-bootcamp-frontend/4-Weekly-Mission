import Card from "./Card";
import "./Cards.css";

export default function Cards({ links = [] }) {
  return (
    <div className="cards">
      {links.map((link) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
