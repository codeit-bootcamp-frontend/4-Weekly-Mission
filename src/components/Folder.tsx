import React, { ChangeEvent, useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import close from '../assets/folder/close.svg';
import Card from './Card';
import { getFolderInfo, getLinksInfo, getSelectLinksInfo } from '../apis/api';
import { ModalData } from './modal/ModalData';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import link from '../assets/folder/link.svg';
import searchicon from '../assets/folder/search.svg';
import addPrimary from '../assets/folder/addPrimary.svg';
import addGray from '../assets/folder/addGray.svg';
import share from '../assets/folder/share.svg';
import pen from '../assets/folder/pen.svg';
import deleteIcon from '../assets/folder/delete.svg';

interface FolderInfo {
  id: number;
  name: string;
}

interface LinksInfo {
  createdAt: Date | undefined;
  created_at: Date | undefined;
  description: string | null;
  imageSource: string | undefined;
  image_source: string | null;
  url: string | null;
}

type ModalOpenHandler = (name: string) => void;
type ModalCloseHandler = () => void;

const Folder = () => {
  const [folderInfo, setFolderInfo] = useState<FolderInfo[]>([]);
  const [linksInfo, setLinksInfo] = useState<LinksInfo[]>([]);
  const [selectFolder, setSelectFolder] = useState<number | null>(null);
  const [selectFolderName, setSelectFolderName] = useState<string>('전체');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectModal, setSelectModal] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [filterLinks, setFilterLinks] = useState<LinksInfo[]>([]);
  const location = useLocation();

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

  const handleSelectLinksInfo = async (folderId?: number) => {
    try {
      const linksInfo = await getSelectLinksInfo(folderId);
      if (Object.keys(linksInfo).length === 0) return;
      setLinksInfo(linksInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickLinkFolder = (id: number, name: string) => {
    setSelectFolder(id);
    setSelectFolderName(name);
    getFolderBackground(id);
  };

  const getFolderBackground = (folderId: number) => {
    return selectFolder === folderId ? 'var(--primary)' : 'var(--white)';
  };

  const filteredLinks = linksInfo.filter((link: any) => {
    if (selectFolder === null || selectFolder === 1) {
      return true;
    }
    return link.folderId === selectFolder;
  });

  const handleOpenModal: ModalOpenHandler = (name: string) => {
    setIsOpenModal(true);
    setSelectModal(name);
  };

  const handleCloseModal: ModalCloseHandler = () => {
    setIsOpenModal(false);
  };

  const handleReset = () => {
    setSearch('');
    setFilterLinks([]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const filteredLinks = linksInfo.filter((link: any) => {
      const { title, url, description } = link;
      return (
        (title && title.toLowerCase().includes(searchValue)) ||
        (url && url.toLowerCase().includes(searchValue)) ||
        (description && description.toLowerCase().includes(searchValue))
      );
    });
    setFilterLinks(filteredLinks);
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
          selectFolder={selectFolder}
          folderInfo={folderInfo}
          linksInfo={linksInfo}
        />
      ) : null}
      {isOpenModal === true ? null : (
        <>
          <Header />
          <FolderContainer>
            <FolderTitle>
              <FolderLinkAddContent>
                <div>
                  <input placeholder='링크를 추가해 보세요' />
                </div>
                <button onClick={() => handleOpenModal('AddLinkModal')}>
                  추가하기
                </button>
              </FolderLinkAddContent>
            </FolderTitle>
            <FolderMain>
              <FolderLinkSerachContent>
                <div>
                  <input
                    placeholder='링크를 검색해 보세요'
                    type='text'
                    value={search}
                    onChange={handleChange}
                  />
                </div>
                {search.length > 0 && (
                  <img src={close} alt='close img' onClick={handleReset} />
                )}
              </FolderLinkSerachContent>
              {!linksInfo && (
                <FolderLinkNoneList>
                  <p>저장된 링크가 없습니다</p>
                </FolderLinkNoneList>
              )}
              {linksInfo && (
                <FolderLinkSaveList>
                  <LinkSaveListCategory>
                    <CategoryContent>
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
                    </CategoryContent>
                    <button onClick={() => handleOpenModal('AddFolderModal')}>
                      폴더 추가
                    </button>
                  </LinkSaveListCategory>
                  <LinkSaveListTitle>
                    <h1>{selectFolderName}</h1>
                    {selectFolderName === '전체' ? (
                      ''
                    ) : (
                      <OptionContent>
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
                      </OptionContent>
                    )}
                  </LinkSaveListTitle>
                  <LinkSaveListContent>
                    <Card
                      folderLinkInfo={filteredLinks}
                      filterLinks={filterLinks}
                      handleOpenModal={handleOpenModal}
                      location={location.pathname}
                    />
                  </LinkSaveListContent>
                </FolderLinkSaveList>
              )}
            </FolderMain>
          </FolderContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default Folder;

const FolderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
  gap: 4rem;

  @media (max-width: 767px) {
    padding-bottom: 6rem;
    gap: 2rem;
  }
`;

const FolderTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 32rem 9rem;
  background-color: var(--bg);

  @media (max-width: 1124px) {
    padding: 6rem 3.25rem 9rem;
  }

  @media (max-width: 767px) {
    padding: 2.4rem 3.2rem 4rem;
  }
`;

const FolderLinkAddContent = styled.div`
  width: 80rem;
  max-width: 106rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--primary);
  background: var(--white);

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & > div::before {
    content: '';
    width: 2rem;
    height: 2rem;
    background-image: url(${link});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 767px) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  & input {
    width: 100%;
    display: flex;
    flex: 1;
    margin-left: 1.2rem;
    color: var(--gray60);
    border: none;
    background-color: var(--white);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 767px) {
      margin-left: 0.6rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: normal;
    }
  }

  & button {
    width: 9rem;
    display: flex;
    padding: 1rem 1.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: normal;

    @media (max-width: 767px) {
      width: 10rem;
    }
  }

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) {
    width: 32.5rem;
    padding: 0.8rem 1rem;
  }
`;

const FolderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1124px) {
    padding: 0 3.25rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 3.2rem;
    gap: 3.2rem;
  }
`;

const FolderLinkSerachContent = styled.form`
  width: 106rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background-color: #f5f5f5;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & > div::before {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${searchicon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  & input {
    width: 100%;
    display: flex;
    flex: 1;
    margin-left: 0.8rem;
    color: #666666;
    border: none;
    background-color: #f5f5f5;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 767px) {
      margin-left: 1.5rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: normal;
    }
  }

  & > img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) {
    width: 32.5rem;
    padding: 1.3rem 1.6rem;
  }
`;

const FolderLinkNoneList = styled.div`
  width: 106rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.1rem 0 3.5rem;

  & > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media (max-width: 1124px) {
    width: 100%;
  }
`;

const FolderLinkSaveList = styled.div`
  width: 106rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) {
    width: 32.5rem;
  }
`;

const LinkSaveListCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 7.9rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--primary);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;

    @media (max-width: 1124px) {
      width: 10rem;
    }

    @media (max-width: 767px) {
      width: 12.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 2.4rem;
      border-radius: 2rem;
      border: 0.1rem solid var(--white);
      background: var(--primary);
      color: var(--gray10);
      position: fixed;
      bottom: 10.1rem;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }

  & > button::after {
    content: '';
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${addPrimary});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 767px) {
      background-image: url(${addGray});
    }
  }
`;

const CategoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary);
    background-color: #ffffff;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 767px) {
      padding: 0.6rem 1rem;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1124px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.2rem 0.8rem;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.2rem 0.8rem;
  }
`;

const LinkSaveListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;

const OptionContent = styled.div`
  display: flex;
  gap: 1.2rem;

  & > button {
    display: flex;
    align-items: center;
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: normal;
    gap: 0.4rem;
  }

  & > button:nth-of-type(1)::before {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    background-image: url(${share});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  & > button:nth-of-type(2)::before {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    background-image: url(${pen});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  & > button:nth-of-type(3)::before {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    background-image: url(${deleteIcon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const LinkSaveListContent = styled.div`
  width: 100%;
`;
