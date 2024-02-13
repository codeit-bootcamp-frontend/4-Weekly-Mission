import "./Cards.css";
import Card from "./Card";

export default function Cards({ links = [] }) {
  return (
    <div className="card-container">
      {links.map((link) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
