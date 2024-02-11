import "./Cards.css";
import Card from "../../components/Card";

export default function Cards({ links = [] }) {
  if (!links) {
    return null;
  }

  return (
    <div className="cards">
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}
