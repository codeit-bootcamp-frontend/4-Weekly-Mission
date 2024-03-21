import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { SearchBarProps } from './SearchBar.types';
import styles from './SearchBar.module.scss';

const SearchBar = ({ links, onUpdateLinks }: SearchBarProps) => {
  const [keyword, setKeyword] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredLinks = links.filter(link => {
        if (link.url?.includes(keyword) || link.title?.includes(keyword) || link.description?.includes(keyword))
          return true;
      });
      onUpdateLinks(filteredLinks);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <section className={styles.layout}>
      <div className={styles.colorBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          className={styles.input}
          value={keyword}
          onChange={handleInputChange}
          placeholder='링크를 검색해 보세요'
        />
        {keyword && <ImCross />}
      </div>
      {keyword && (
        <p className={styles.resultText}>
          <span>{keyword}</span>으로 검색한 결과입니다.
        </p>
      )}
    </section>
  );
};

export default SearchBar;
