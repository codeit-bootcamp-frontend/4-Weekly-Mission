import { useState } from 'react';
import { styled } from 'styled-components';

import SearchBar from 'components/SearchBar';
import PageTitle from 'components/common/PageTitle';
import AddFolderButton from 'components/common/button/AddFolderButton';
import TabButton from 'components/common/button/TabButton';
import FolderHeader from 'components/common/header/FolderHeader';
import OptionBtns from 'components/folder/OptionBtns';
import { GridTemplate } from 'styles/commonStyle';
import Card from 'components/common/card/Card';

const Styled = {
  ButtonBox: styled.div`
    margin: 4rem 0 2.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  TitleAndOptions: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

const tabInfo = [
  {
    title: '전체',
    func: () => {
      console.log('전체');
    },
  },
  {
    title: '⭐️ 즐겨찾기',
    func: () => {
      console.log('즐찾');
    },
  },
  {
    title: '코딩 팁',
    func: () => {
      console.log('코딩 팁');
    },
  },
  {
    title: '채용 사이트',
    func: () => {
      console.log('채용 사이트');
    },
  },
  {
    title: '유용한 글',
    func: () => {
      console.log('유용한 글');
    },
  },
];

function FolderPage() {
  return (
    <>
      <PageTitle title="폴더" />
      <FolderHeader />
      <SearchBar />
      <Styled.ButtonBox>
        <TabButton tabInfo={tabInfo} />
        <AddFolderButton />
      </Styled.ButtonBox>
      <Styled.TitleAndOptions>
        <h3 style={{ fontSize: '2.4rem', fontWeight: 600 }}>선택된 탭</h3>
        <OptionBtns />
      </Styled.TitleAndOptions>
      <GridTemplate>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridTemplate>
    </>
  );
}

export default FolderPage;
