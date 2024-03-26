import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LinkCard from './LinkCard';
import Modal from './modal/Modal';
import style from '../styles/LinkList.module.css';
import { folderList } from '@/types/folderDataType.type';

interface link {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}
interface linkListProp {
  linkList: link[];
  folderList?: folderList[] | any;
}

let modalType = '';
let modalData = {};
function LinkList({ linkList, folderList }: linkListProp) {
  const [isModal, setIsModal] = useState(false);
  const enableFolderAddModal = (type: string, data = folderList) => {
    modalType = type;
    modalData = data;
    setIsModal(true);
  };

  const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

  useEffect(() => {
    setIsModal(false);
  }, []);

  return (
    <>
      {isModal &&
        createPortal(
          <Modal
            type={modalType}
            onClose={() => setIsModal(false)}
            data={modalData}
          />,
          modalRoot,
        )}
      <div id={style.linkList}>
        <div className={style.linkGridBox}>
          {linkList.length
            ? linkList.map((item, index) => {
                return (
                  <LinkCard
                    data={item}
                    key={item?.id}
                    openModal={enableFolderAddModal}
                  />
                );
              })
            : null}
        </div>
        {!linkList.length && (
          <div className={style.noLink}>저장된 링크가 없습니다</div>
        )}
      </div>
    </>
  );
}

export default LinkList;
