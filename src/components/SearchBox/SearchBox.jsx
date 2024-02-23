import './SearchBox.css';
import { IconSearch } from '../Icon';

function SearchBox(props) {
  return (
    <div className="search-box">
      <IconSearch />
      <input className="search-box__input" {...props} />
    </div>
  );
}

export default SearchBox;
