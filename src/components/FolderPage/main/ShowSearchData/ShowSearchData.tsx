import styles from './ShowSearchData.module.css';

function ShowSearchData({ searchData }: { searchData: string | null }) {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['search-data']}>{searchData}</span>으로 검색한
      결과입니다.
    </div>
  );
}

export default ShowSearchData;
