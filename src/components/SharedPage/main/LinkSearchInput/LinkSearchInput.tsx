import {
  FormEvent,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useState,
} from 'react';
import styles from './LinkSearchInput.module.css';
interface FolderDesc {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

interface FolderIdData {
  data: FolderDesc[];
}
interface LinkSearchProps {
  setViewSearchData: Dispatch<SetStateAction<boolean | null>>;
  searchData: string | null;
  setSearchData: Dispatch<SetStateAction<string | null>>;
  setFilterData: Dispatch<SetStateAction<FolderIdData | null>>;
  filterData: FolderIdData | null;
  folderId: string;
}

function LinkSearchInput({
  setViewSearchData,
  searchData,
  setSearchData,
  setFilterData,

  folderId,
}: LinkSearchProps) {
  async function fetchData() {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/3/links${folderId}`)
      .then((res) => res.json())
      .then((result) => setFilterData(result));
  }
  async function handleFilterClick() {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/3/links${folderId}`)
      .then((res) => res.json())
      .then((result) => setFilterData(result));
    setFilterData((prev) => ({
      ...prev,
      data:
        prev?.data?.filter(
          (i) =>
            searchData &&
            (i.title.toUpperCase().includes(searchData.toUpperCase()) ||
              i.description.toUpperCase().includes(searchData.toUpperCase()) ||
              i.url.toUpperCase().includes(searchData.toUpperCase()))
        ) || [],
    }));
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setViewSearchData(true);
    handleFilterClick();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const onClickCancleIcon = (event: React.MouseEvent<HTMLImageElement>) => {
    fetchData();
    setViewSearchData(false);
    setSearchData('');
  };
  return (
    <div className={styles.link_search_input_wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.link_search_input}
          placeholder='링크를 검색해 보세요.'
          value={searchData || ''}
          onChange={handleInputChange}
        ></input>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/search_icon.svg`}
          className={styles.search_icon}
          alt='search_icon'
        />
        <img
          className={styles['input_close_icon']}
          src={`${process.env.PUBLIC_URL}/assets/images/search_input_close_icon.svg`}
          alt='검색 취소 아이콘'
          onClick={onClickCancleIcon}
        />
      </form>
    </div>
  );
}

export default LinkSearchInput;
