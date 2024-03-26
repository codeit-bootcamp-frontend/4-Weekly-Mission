import React, { useEffect, useState } from 'react';
import { get } from '../../../apis/api';
import Button from '../../../components/button/Button';
import SearchBar from '../../../components/search-bar/SearchBar';
import Card from '../../../components/card/Card';
import * as S from './Content.style';
import LinkIcon from '../../../assets/icons/link.svg';
import ShareIcon from '../../../assets/icons/share.svg';
import PenIcon from '../../../assets/icons/pen.svg';
import DeleteIcon from '../../../assets/icons/delete.svg';
import Modal from '../../../components/modal/Modal';

interface Link {
  id: number;
  createdAt: string;
  created_at: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface Folder {
  id: number;
  name: string;
  link: { count: number };
}

const Content: React.FC = () => {
  const [title, setTitle] = useState<string>('전체');
  const [modalFolderName, setModalFolderName] = useState<string>('전체');
  const [folderList, setFolderList] = useState<Folder[] | null>(null);
  const [folderId, setFolderId] = useState<number | null>(null);
  const [userFolder, setUserFolder] = useState<Link[]>([]);
  const [modalType, setModalType] = useState<string | null>(null);

  useEffect(() => {
    get('/users/1/folders').then(({ data }) => setFolderList(data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await (title === '전체' ? get('/users/1/links') : get(`/users/1/links?folderId=${folderId}`));

        setUserFolder(data);
      } catch (error) {
        throw new Error('API 호출 중 에러가 발생했습니다.');
      }
    };
    fetchData();
  }, [title, folderId]);

  const openModal = (type: string) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const renderModal = () => {
    switch (modalType) {
      case 'AddToFolderModal':
        return (
          <Modal closeModal={closeModal} title="폴더에 추가" folderList={folderList} folderName={modalFolderName} />
        );
      case 'FolderAddModal':
        return <Modal closeModal={closeModal} title="폴더 추가" />;
      case 'FolderSharedModal':
        return <Modal closeModal={closeModal} title="폴더 공유" folderId={folderId} folderName={modalFolderName} />;
      case 'FolderNameChangeModal':
        return <Modal closeModal={closeModal} title="폴더 이름 변경" />;
      case 'FolderDeleteModal':
        return <Modal closeModal={closeModal} title="폴더 삭제" folderName={modalFolderName} />;
      case 'LinkDeleteModal':
        return <Modal closeModal={closeModal} title="링크 삭제" folderName={modalFolderName} />;
      default:
        return null;
    }
  };

  return (
    <main>
      <S.ContentHeaderContainer>
        <form className="add-link-bar">
          <div className="input-box">
            <img src={LinkIcon} alt="폴더 링크 이미지" />
            <input type="text" placeholder="링크를 추가해 보세요." />
          </div>
          <Button
            width={'8rem'}
            padding={'10px 16px'}
            fontSize={'1.4rem'}
            openModal={(e) => {
              e.preventDefault();
              openModal('AddToFolderModal');
              setModalFolderName('');
            }}>
            추가하기
          </Button>
        </form>
      </S.ContentHeaderContainer>

      <S.CardListContainer>
        <SearchBar />
        <div className="folder-list-box">
          <S.FolderButtonList>
            <div className="folder-btn-box">
              <button className={`folder-btn ${title === '전체' ? 'active' : ''}`} onClick={() => setTitle('전체')}>
                전체
              </button>
              {folderList?.map((folder) => (
                <button
                  key={folder.id}
                  className={`folder-btn ${title === folder.name ? 'active' : ''}`}
                  onClick={() => {
                    setTitle(folder.name);
                    setFolderId(folder.id);
                  }}>
                  {folder.name}
                </button>
              ))}
            </div>

            <S.AddFolder
              onClick={() => {
                openModal('FolderAddModal');
                setModalFolderName(title);
              }}>
              <p className="add-folder-btn">폴더 추가</p>
            </S.AddFolder>
          </S.FolderButtonList>

          <S.CurrentName>
            <p className="title">{title}</p>
            {title !== '전체' && (
              <div className="folder-controls">
                <button
                  className="control-btn"
                  onClick={() => {
                    openModal('FolderSharedModal');
                    setModalFolderName(title);
                  }}>
                  <img src={ShareIcon} alt="공유 아이콘" />
                  <p>공유</p>
                </button>
                <button
                  className="control-btn"
                  onClick={() => {
                    openModal('FolderNameChangeModal');
                    setModalFolderName(title);
                  }}>
                  <img src={PenIcon} alt="펜 아이콘" />
                  <p>이름 변경</p>
                </button>
                <button
                  className="control-btn"
                  onClick={() => {
                    openModal('FolderDeleteModal');
                    setModalFolderName(title);
                  }}>
                  <img src={DeleteIcon} alt="휴지통(삭제) 아이콘" />
                  <p>삭제</p>
                </button>
              </div>
            )}
          </S.CurrentName>

          {userFolder && userFolder.length > 0 ? (
            <S.CardContainer>
              {userFolder.map((link) => (
                <Card key={link.id} link={link} openModal={openModal} setModalFolderName={setModalFolderName} />
              ))}
            </S.CardContainer>
          ) : (
            <S.NoFolderLink>저장된 링크가 없습니다.</S.NoFolderLink>
          )}
        </div>
      </S.CardListContainer>
      {renderModal()}
    </main>
  );
};

export default Content;
