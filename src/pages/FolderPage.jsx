import { useState } from 'react';
import { styled } from 'styled-components';

import { GridTemplate } from 'styles/commonStyle';
import useUserFoldersQuery from 'hooks/api/folder/useUserFoldersQuery';
import SearchBar from 'components/SearchBar';
import PageTitle from 'components/common/PageTitle';
import AddFolderButton from 'components/common/button/AddFolderButton';
import TabButton from 'components/common/button/TabButton';
import FolderHeader from 'components/common/header/FolderHeader';
import OptionBtns from 'components/folder/OptionBtns';
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

    margin-bottom: 2.4rem;
  `,
};

function FolderPage() {
  const { data } = useUserFoldersQuery({ userId: 1 });
  const folderList = data?.data?.data || [];
  const [selectedTabName, setSelectedTabName] = useState('전체');

  return (
    <>
      <PageTitle title="폴더" />
      <FolderHeader />
      <SearchBar />
      <Styled.ButtonBox>
        <TabButton tabInfo={folderList} onChange={setSelectedTabName} />
        <AddFolderButton />
      </Styled.ButtonBox>
      <Styled.TitleAndOptions>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 600 }}>{selectedTabName}</h2>
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
