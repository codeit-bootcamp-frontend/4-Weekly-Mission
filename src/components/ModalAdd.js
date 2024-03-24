import styles from '../styles/ModalAdd.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import iconCheck from '../assets/icons/check.svg';

const ModalAdd = ({ folderList }) => {

  return (
    <div className={cn('modal-add-content')} >
      <div className={cn('add-area')}>링크 주소</div>
      <div className={cn('add-folder-list')}>
        {folderList ? (
          <>
            {folderList.map((folder) => (
              <div className={cn('add-folder-item')} key={folder.id}>
                <div className={cn('add-folder-box')}>
                  <p className={cn('add-folder-name')} >{folder.name}</p>
                  <p className={cn('add-folder-link')}>{folder.link.count}개 링크</p>
                </div>
                <img className={cn('add-folder-check-icon')} src={iconCheck} />
              </div>
            ))}
          </>
        ) : (
          <div className={cn('none-folder')}>저장된 폴더가 없습니다.</div>
        )}
      </div>
      <button className={cn('add-button')}>추가하기</button>
    </div >
  );
};

export default ModalAdd;