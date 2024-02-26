import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './modal/Modal';
import changeNameImg from '../assets/folderChangeName.svg';
import deleteImg from '../assets/folderDelete.svg';
import sharedImg from '../assets/folderShared.svg';
import { classNames, cond } from '../utils/style';
import style from '../styles/FolderList.module.css';

const INIT_ACTIVE_FOLDER = {
  name: '전체',
  id: '',
};
let modalType = '';
let modalData = {};
function FolderList({ folderList, onClick }) {
  const [activeFolderInfo, setActiveFolderInfo] = useState(INIT_ACTIVE_FOLDER);
  const [isModal, setIsModal] = useState(false);
  const handleFolderClick = (folder) => (e) => {
    // 커링
    onClick(e.target.name);
    setActiveFolderInfo({ ...folder });
  };
  const enableFolderAddModal = (type) => {
    modalType = type;
    modalData = { ...activeFolderInfo };
    setIsModal(true);
  };
  useEffect(() => {
    setIsModal(false);
  }, []);

  const modalRoot = document.getElementById('modal-root');

  return (
    <>
      {isModal && createPortal(<Modal type={modalType} onClose={() => setIsModal(false)} data={modalData} />, modalRoot)}
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
                  name={item.id}
                  className={classNames(style.folderBtn, cond(activeFolderInfo.id === item.id, style.active))}
                  onClick={handleFolderClick(item)} // (e)=>handleFolderClick(item)(e) 를 축약한것
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div>
            <button className={style.addFolderBtn} onClick={() => enableFolderAddModal('FolderAdd')}>
              폴더 추가 +
            </button>
          </div>
        </div>
        <div className={style.flexBox}>
          <div>
            <span className={style.folderName}>{activeFolderInfo.name}</span>
          </div>
          <div className={style.flexBox}>
            {activeFolderInfo.id !== '' && (
              <>
                <img src={sharedImg} alt="shared" onClick={() => enableFolderAddModal('Share')} />
                <img src={changeNameImg} alt="change" onClick={() => enableFolderAddModal('Edit')} />
                <img src={deleteImg} alt="delete" onClick={() => enableFolderAddModal('FolderDelete')} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FolderList;
