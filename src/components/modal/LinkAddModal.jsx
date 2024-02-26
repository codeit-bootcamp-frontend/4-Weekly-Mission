import { useState } from 'react';
import { classNames, cond } from '../../utils/style';
import checkImg from '../../assets/check.svg';
import style from '../../styles/modal/LinkAddModal.module.css';

function LinkAddModal({ data }) {
  const [isActive, setActive] = useState(0);
  const handleFolderClick = (key) => (e) => {
    setActive(key);
  };

  return (
    <div className={style.modalContentFlex}>
      <div className={style.modalTitle}>폴더에 추가</div>
      <p className={style.modalData}>{}</p>
      <div className={classNames(style.folderListBox)}>
        {data.length &&
          data.map((data, idx) => {
            return (
              <div
                key={data.id}
                className={classNames(style.folderInfo, cond(isActive === data.id, style.active))}
                onClick={handleFolderClick(data.id)}
              >
                <span className={style.folderName}>{data.name}</span>
                <span className={style.linkCount}>{data.link.count}개 링크</span>
                <img src={checkImg} className={style.check} alt="check" />
              </div>
            );
          })}
      </div>
      <button className={style.modalBtn}>추가하기</button>
    </div>
  );
}

export default LinkAddModal;
