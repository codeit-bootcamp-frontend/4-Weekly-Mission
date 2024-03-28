import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';
import { SEARCH_IMAGE, CLOSE_IMAGE } from '@/utils/constant';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Image from 'next/image';

type SearchBarType = {
  setSearchValue: (value: string) => void;
};

const cx = classNames.bind(styles);

const SearchBar = ({ setSearchValue }: SearchBarType) => {
  const [textValue, setTextValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchValue(event.target.value);
    } else {
      setTextValue(event.target.value);
    }
  };

  const handleCloseClick = () => {
    //setSearchValue('');
    setTextValue('');
  };

  return (
    <div className={cx('container')}>
      <input
        className={cx('input')}
        type="search"
        placeholder="링크를 검색해 보세요."
        value={textValue}
        onChange={handleChange}
        onKeyDown={handleChange}
      />
      <Image
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className={cx('icon-search')}
        width={16}
        height={16}
      />
      <button onClick={handleCloseClick}>
        <Image
          src={CLOSE_IMAGE}
          alt="작성한 검색어를 삭제하는 아이콘"
          className={cx('icon-close')}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default SearchBar;
