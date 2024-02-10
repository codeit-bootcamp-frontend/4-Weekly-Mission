import Card from "./Card";

export default function Cards({ links = [] }) {
  return (
    <ul>
      {links.map((link) => (
        <Card key={link.id} data={link} />
      ))}
    </ul>
  );
}
