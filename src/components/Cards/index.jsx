import Card from "../Card";
import "./style.css";

export default function Cards({ links = [] }) {
  // links = [];
  return (
    <>
      {links && links.length > 0 ? (
        <div className="cards">
          {links.map((link) => (
            <Card key={link.id} data={link} />
          ))}
        </div>
      ) : (
        <div className="no-links">저장된 링크가 없습니다</div>
      )}
    </>
  );
}
