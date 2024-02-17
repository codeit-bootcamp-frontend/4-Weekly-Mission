import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import addButtonIcon from '../assets/add.svg';
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
      <div className="add_folder_button_area">
        <p className="add_folder_button">폴더 추가</p>
        <img src={addButtonIcon} />
      </div>
    </div>
  );
};

export default ContentsArea;
