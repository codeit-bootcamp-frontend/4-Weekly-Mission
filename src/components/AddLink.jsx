import link from '../assets/link.svg';
import Styles from '../styles/Folder.module.css';

const AddLink = () => {
  return (
    <div className={Styles.AddLink}>
      <div className={Styles.AddLinkGroup}>
        <img className={Styles.LinkIcon} src={link} alt='링크 아이콘' />
        <p className={Styles.AddLinkText}>링크를 추가해 보세요</p>
      </div>
      <button className={Styles.AddLinkBtn}>추가하기</button>
    </div>
  );
};

export default AddLink;
