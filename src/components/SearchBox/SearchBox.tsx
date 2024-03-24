import './SearchBox.css';
import { IconSearch } from '../Icon';
import { InputProps } from '@src/types/common';

interface SearchBoxProps extends InputProps {}

function SearchBox(props: SearchBoxProps) {
  return (
    <div className="search-box">
      <IconSearch />
      <input className="search-box__input" {...props} />
    </div>
  );
}

export default SearchBox;
