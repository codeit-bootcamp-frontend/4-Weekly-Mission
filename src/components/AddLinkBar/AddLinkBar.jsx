import link from '../../images/link.svg';
import { Link } from 'react-router-dom';

function AddLinkBar() {
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <form className="add-link-bar" onSubmit={handleSearch}>
      <img src={link} alt="link" />
      <input type="text" placeholder="링크를 추가해 보세요" />
      <Link to="/folder">
        <div className="add-btn">추가하기</div>
      </Link>
    </form>
  );
}

export default AddLinkBar;
