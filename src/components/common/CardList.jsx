import "./CardList.css";
import Card from "./Card";

function CardList({ folder, isMobile }) {
  return folder?.length ? (
    <ul className="CardList flex">
      {folder &&
        folder.map((link) => {
          return (
            <li key={link.id}>
              <Card link={link} isMobile={isMobile} />
            </li>
          );
        })}
    </ul>
  ) : (
    <div className="CardList-noLink flex items-center">
      저장된 링크가 없습니다
      <div></div>
    </div>
  );
}

export default CardList;
