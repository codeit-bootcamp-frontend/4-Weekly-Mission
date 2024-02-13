import Card from "./Card";

export default function Cards({ links = [] }) {
  return (
    <div className="cards">
      {links.map((link) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}
