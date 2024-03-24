import LinkCard from './LinkCard';
import styles from '../css/LinkList.module.css';

interface Data {
  url: string;
  id: number;
  imageSource?: string;
  createdAt?: string;
  description?: string;
}

interface SearchData extends Data {
  title?: string;
}

interface Props {
  keyword: string;
  linkData: SearchData[];
}

function LinkList({ keyword, linkData }: Props) {
  const searchData = linkData.filter((data) => {
    const SEARCH_WORD = keyword.toLowerCase();
    const URL = data.url.toLowerCase();
    const TITLE = data.title?.toLowerCase() ?? '';
    const DESCRIPTION = data.description?.toLowerCase() ?? '';
    
    return URL.includes(SEARCH_WORD) || TITLE.includes(SEARCH_WORD) || DESCRIPTION.includes(SEARCH_WORD)
  });

  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {searchData.length !== 0 ? (searchData.map((item: any) => 
        <LinkCard item={item} key={item.id}/>))
        : <p className={styles.noLinks}>저장된 링크가 없습니다.</p>}
      </div>
    </div>
  )
}

export default LinkList;