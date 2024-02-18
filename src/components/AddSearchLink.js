import Button from '../components/Button';
import PurpleLinkIcon from '../assets/purple_link.svg';

const AddSearchLink = () => {
  return (
    <form className="add_search_link_area">
      <img className="link_icon" src={PurpleLinkIcon} />
      <input
        className="add_link_input"
        type="text"
        placeholder="링크를 검색해 보세요."
      ></input>
      <Button text="추가하기"></Button>
    </form>
  );
};

export default AddSearchLink;
