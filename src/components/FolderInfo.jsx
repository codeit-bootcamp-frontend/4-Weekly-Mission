import style from '../styles/FolderInfo.module.css';

function FolderInfo({ folderInfo }) {
  return (
    <div id={style.folderInfo}>
      <div className={style.infoBox}>
        <div className={style.profileImg}>
          <img src={folderInfo.owner?.profileImageSource} alt="profile" />
        </div>
        <div className={style.userName}>
          <div>{folderInfo.owner?.name}</div>
        </div>
        <div className={style.folderName}>
          <div>{folderInfo?.name}</div>
        </div>
      </div>
    </div>
  );
}

export default FolderInfo;
