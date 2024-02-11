import "./Cards.css";
import Card from "../../components/Card";

export default function Cards({ links = [] }) {
  console.log(links);
  return (
    <div className="cards">
      {links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}
