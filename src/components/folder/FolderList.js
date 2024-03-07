import FolderTabItem from './FolderTabItem';
import Tab from './Tab';
import Card from '../Card';

import add from '../../images/add.svg';
import share from '../../images/share.svg';
import pen from '../../images/pen.svg';
import deleteicon from '../../images/delete.svg';

import '../styles/card.css';

import { getAllFolderLink, getFolderLinkData } from '../../api';
import { React, useEffect, useState } from 'react';

import styled from 'styled-components';

const FolderContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas: 'folders folders add-button';
  justify-content: space-between;
`;

const TabContainer = styled.div`
  width: 100%;
`;

const TabOptionContainer = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: var(--gray60);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FolderName = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

const FolderAddButton = styled.a`
  color: #6d6afe;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  grid-area: add-button;
`;

const FolderTab = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  grid-area: folders;
  column-gap: 0.8rem;
`;

const OptionIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const FolderList = ({ folderList }) => {
  const [links, setLinks] = useState(null);
  const [item, setItem] = useState({ id: 'all', name: '전체' });

  const handleLoadAllFolderLink = async () => {
    const { data, error } = await getAllFolderLink();
    if (error) {
      return alert(error);
    }
    setLinks(data);
    setItem({ id: 'all', name: '전체' });
  };

  const handleLoadFolderLink = async () => {
    const { data, error } = await getFolderLinkData(item.id === 'all' ? '' : `${item.id}`);

    if (error) {
      return alert(error);
    }
    setLinks(data);
  };

  useEffect(() => {
    handleLoadFolderLink();
  }, [item]);

  return (
    <>
      {links ? (
        <div className="main-container">
          <TabContainer>
            {folderList ? (
              <FolderContainer>
                <FolderTab>
                  <Tab onClick={handleLoadAllFolderLink}>전체</Tab>
                  {folderList.map((item) => (
                    <FolderTabItem folder={item} key={item.id} setItem={setItem} />
                  ))}
                </FolderTab>
                <FolderAddButton>
                  폴더 추가
                  <img width="16" height="16" src={add} alt="folder add button" />
                </FolderAddButton>
              </FolderContainer>
            ) : null}
            <TabOptionContainer>
              <FolderName>{item.name}</FolderName>
              <OptionContainer>
                <Option>
                  <OptionIcon src={share} alt="공유 아이콘" />
                  공유
                </Option>
                <Option>
                  <OptionIcon src={pen} alt="이름 변경 아이콘" />
                  이름 변경
                </Option>
                <Option>
                  <OptionIcon src={deleteicon} alt="삭제 아이콘" />
                  삭제
                </Option>
              </OptionContainer>
            </TabOptionContainer>
          </TabContainer>
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
