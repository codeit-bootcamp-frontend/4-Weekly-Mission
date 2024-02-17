import style from '../styles/FolderList.module.css';
import changeNameImg from '../assets/folderChangeName.svg';
import deleteImg from '../assets/folderDelete.svg';
import sharedImg from '../assets/folderShared.svg';
import { useState } from 'react';

const INIT_ACTIVEFOLDER = {
  name: '전체',
  id: '',
};

function FolderList({ folderList, onClick }) {
  const [activeFolderInfo, setActiveFolderInfo] = useState(INIT_ACTIVEFOLDER);
  const handleClick = (item) => {
    onClick(item.id);
    setActiveFolderInfo({ ...item });
  };
  return (
    <div className={style.folderList}>
      <div className={style.flexBox}>
        <div className={style.flexBox}>
          <button
            className={`${style.folderBtn} ${activeFolderInfo.id === 0 ? style.active : ''}`}
            onClick={() => setActiveFolderInfo(INIT_ACTIVEFOLDER)}
          >
            전체
          </button>
          {folderList &&
            folderList.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  className={`${style.folderBtn} ${activeFolderInfo.id === item.id ? style.active : ''}`}
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </button>
              );
            })}
        </div>
        <div>
          <button className={style.addFolderBtn}>폴더 추가 +</button>
        </div>
      </div>
      <div className={style.flexBox}>
        <div>
          <span className={style.folderName}>{activeFolderInfo.name}</span>
        </div>
        <div className={style.flexBox}>
          <img src={sharedImg} alt="shared" />
          <img src={changeNameImg} alt="change" />
          <img src={deleteImg} alt="delete" />
        </div>
      </div>
    </div>
  );
}

export default FolderList;
