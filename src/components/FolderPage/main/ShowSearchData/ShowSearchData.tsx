import styles from './ShowSearchData.module.css';

function ShowSearchData({ viewData }: { viewData: string | null }) {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['search-data']}>{viewData}</span>으로 검색한
      결과입니다.
    </div>
  );
}

export default ShowSearchData;
