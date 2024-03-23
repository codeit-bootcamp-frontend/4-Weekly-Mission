import LinkCard from './LinkCard';
import styles from '../css/LinkList.module.css';

interface Props {
  linkData: any;
}

function LinkList({ linkData }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {linkData.length !== 0 ? (linkData.map((item: any) => 
        <LinkCard item={item} key={item.id}/>))
        : <p className={styles.noLinks}>저장된 링크가 없습니다.</p>}
      </div>
    </div>
  )
}

export default LinkList;