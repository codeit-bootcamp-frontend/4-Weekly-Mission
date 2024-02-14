import '../css/CardList.css';
import { DiffDate } from '../utils';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

function CardListLink({ link }) {
  const handleLinkClick = () => {
    window.open(`${link.url}`, '_blank');
  };
  return (
    <div className="cardListLink" onClick={handleLinkClick}>
      <img
        className="cardListLink-img"
        src={link.imageSource}
        alt={link.title}
      />
      <div className="cardList-text">
        <p className="cardList-timestamp">{DiffDate(link.createdAt)}</p>
        <p className="cardList-descript">{link.description}</p>
        <p>{formatDate(link.createdAt)}</p>
      </div>
    </div>
  );
}
function CardList({ links }) {
  return (
    <div className="card-form">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <CardListLink link={link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
