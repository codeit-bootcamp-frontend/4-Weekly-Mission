import React, { useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../style/Folder.css';
import close from '../assets/folder/close.svg';
import Card from './Card';
import { getFolderInfo, getLinksInfo, getSelectLinksInfo } from '../apis/api';
import { ModalData } from './modal/ModalData';

const Folder = () => {
  const [folderInfo, setFolderInfo] = useState([]);
  const [linksInfo, setLinksInfo] = useState([]);
  const [selectFolder, setSelectFolder] = useState(null);
  const [selectFolderName, setSelectFolderName] = useState('전체');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectModal, setSelectModal] = useState(null);

  const handleLoadFolderInfo = async () => {
    try {
      const data = await getFolderInfo();
      const folderInfo = data.data;
      const allFolderInfo = [{ id: 1, name: '전체' }, ...folderInfo];

      if (!folderInfo) return;
      setFolderInfo(allFolderInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadLinksInfo = async () => {
    try {
      const data = await getLinksInfo();
      const linksInfo = data.data;

      if (linksInfo === undefined) {
      }
      setLinksInfo(linksInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectLinksInfo = async (folderId) => {
    try {
      const linksInfo = await getSelectLinksInfo(folderId);
      if (Object.keys(linksInfo).length === 0) return;
      setLinksInfo(linksInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickLinkFolder = (id, name) => {
    setSelectFolder(id);
    setSelectFolderName(name);
    getFolderBackground(id);
  };

  const getFolderBackground = (folderId) => {
    return selectFolder === folderId ? 'var(--primary)' : 'var(--white)';
  };

  const filteredLinks = linksInfo.filter((link) => {
    if (selectFolder === null || selectFolder === 1) {
      return true;
    }
    return link.folderId === selectFolder;
  });

  const handleOpenModal = (name) => {
    setIsOpenModal(true);
    setSelectModal(name);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    handleLoadFolderInfo();
    handleLoadLinksInfo();
    handleSelectLinksInfo();
  }, []);

  return (
    <>
      {isOpenModal === true ? (
        <ModalData
          handleCloseModal={handleCloseModal}
          selectModal={selectModal}
        />
      ) : null}
      {isOpenModal === true ? null : (
        <>
          <Header />
          <div className='FolderContainer'>
            <div className='FolderTitle'>
              <div className='FolderLinkAddContent'>
                <div>
                  <input placeholder='링크를 추가해 보세요' />
                </div>
                <button onClick={() => handleOpenModal('AddLinkModal')}>
                  추가하기
                </button>
              </div>
            </div>
            <div className='FolderMain'>
              <form className='FolderLinkSerachContent'>
                <div>
                  <input placeholder='링크를 검색해 보세요' />
                </div>
                <img src={close} alt='close img' />
              </form>
              {!linksInfo && (
                <div className='FolderLinkNoneList'>
                  <p>저장된 링크가 없습니다</p>
                </div>
              )}
              {linksInfo && (
                <div className='FolderLinkSaveList'>
                  <div className='LinkSaveListCategory'>
                    <div className='CategoryContent'>
                      {folderInfo.map((item) => (
                        <button
                          key={item.id}
                          onClick={() =>
                            handleClickLinkFolder(item.id, item.name)
                          }
                          style={{
                            backgroundColor: getFolderBackground(item.id),
                          }}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => handleOpenModal('AddFolderModal')}>
                      폴더 추가
                    </button>
                  </div>
                  <div className='LinkSaveListTitle'>
                    <h1>{selectFolderName}</h1>
                    {selectFolderName === '전체' ? (
                      ''
                    ) : (
                      <div className='OptionContent'>
                        <button onClick={() => handleOpenModal('ShareModal')}>
                          공유
                        </button>
                        <button onClick={() => handleOpenModal('EditModal')}>
                          이름 변경
                        </button>
                        <button
                          onClick={() => handleOpenModal('DeleteFolderModal')}
                        >
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                  <div className='LinkSaveListContent'>
                    <Card folderLinkInfo={filteredLinks} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Folder;
