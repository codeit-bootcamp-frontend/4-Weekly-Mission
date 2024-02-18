import style from '../styles/LinkList.module.css';
import LinkCard from '../components/LinkCard';

function LinkList({ linkList }) {
  return (
    <div id={style.linkList}>
      <div className={style.linkGridBox}>
        {linkList.length
          ? linkList.map((item, index) => {
              return <LinkCard data={item} key={item?.id} />;
            })
          : null}
      </div>
      {!linkList.length && <div className={style.noLink}>저장된 링크가 없습니다</div>}
    </div>
  );
}

export default LinkList;
