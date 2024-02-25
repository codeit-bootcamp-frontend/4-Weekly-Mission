import FolderTabItem from './FolderTabItem';
import React from 'react';
import '../styles/card.css';
import Tab from './Tab';
import add from '../../images/add.svg';
import styles from '../../pages/styles/FolderPage.module.css';
import { getAllFolderLink } from '../../api';
import { useEffect, useState } from 'react';
import Card from '../Card';
import '../styles/card.css';

const FolderList = ({ folderList }) => {
  const [links, setLinks] = useState(null);

  const handleLoadFolderLink = async () => {
    const { data, error } = await getAllFolderLink();

    if (error) {
      return alert(error);
    }
    setLinks(data);
  };

  useEffect(() => {
    handleLoadFolderLink();
  }, []);

  return (
    <>
      {links ? (
        <div className="main-container">
          <div style={{ width: '100%' }}>
            {folderList ? (
              <div className={styles.folder_container}>
                <div className={styles.folder_tab}>
                  <Tab>전체</Tab>
                  {folderList.map((item) => (
                    <FolderTabItem folder={item} key={item.id} />
                  ))}
                </div>
                <a className={styles.folder_add_button}>
                  폴더 추가
                  <img width="16" height="16" src={add} alt="folder add button" />
                </a>
              </div>
            ) : null}
            <div>유용한 글</div>
            <div>공유 이름 변경 삭제</div>
          </div>
          {links.map((link) => (
            <Card link={link} key={link.id} />
          ))}
        </div>
      ) : (
        <div className="main-container-empty">저장된 링크가 없습니다.</div>
      )}
    </>
  );
};

export default FolderList;
