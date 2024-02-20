import { useState } from 'react';
import changeNameImg from '../assets/folderChangeName.svg';
import deleteImg from '../assets/folderDelete.svg';
import sharedImg from '../assets/folderShared.svg';
import {classNames, cond} from '../utils/style'
import style from '../styles/FolderList.module.css';

const INIT_ACTIVE_FOLDER = {
  name: '전체',
  id: '',
};

function FolderList({ folderList, onClick }) {
  const [activeFolderInfo, setActiveFolderInfo] = useState(INIT_ACTIVE_FOLDER);
  const handleFolderClick = (folder) => { // 커링적용 예정
    onClick(folder.id);
    setActiveFolderInfo({ ...folder });
  };
  return (
    <div className={style.folderList}>
      <div className={style.flexBox}>
        <div className={classNames(style.flexBox, style.buttonWrap)}>
          <button
            className={classNames(style.folderBtn, cond(activeFolderInfo.id === '', style.active))}
            onClick={() => {
              setActiveFolderInfo(INIT_ACTIVE_FOLDER);
              onClick('');
            }}
          >
            전체
          </button>
          {folderList.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  className={classNames(style.folderBtn, cond(activeFolderInfo.id === item.id, style.active))}
                  onClick={() => handleFolderClick(item)}
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
          {activeFolderInfo.id !== '' && (
            <>
              <img src={sharedImg} alt="shared" />
              <img src={changeNameImg} alt="change" />
              <img src={deleteImg} alt="delete" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderList;
