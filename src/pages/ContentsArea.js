import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import './ContentsArea.css';

const ContentsArea = ({ links }) => {
  return (
    <div className="contents_area">
      <SearchBar></SearchBar>
      <div className="cards_area">
        {links &&
          links.map((link) => {
            return <Card link={link} key={link.id}></Card>;
          })}
      </div>
    </div>
  );
};

export default ContentsArea;
