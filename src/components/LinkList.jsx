import style from '../styles/LinkList.module.css';
import LinkCard from '../components/LinkCard';

function LinkList({ linkList }) {
  return (
    <div id={style.linkList}>
      <div className={style.linkGridBox}>
        {linkList &&
          linkList.map((item, index) => {
            return <LinkCard data={item} key={item?.id} />;
          })}
      </div>
    </div>
  );
}

export default LinkList;
