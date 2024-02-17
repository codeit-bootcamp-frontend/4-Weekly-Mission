import React from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';
import { useSampleFolderQuery } from 'hook/useFetchData';
import CardError from 'components/common/main/CardError';

const SharedPage = () => {
  const { data, isLoading, isError } = useSampleFolderQuery('sharedDatas');
  const sharedDatas = data?.folder.links;
  if (isError) {
    return <CardError />;
  }
  return (
    <>
      <SharedHeader />
      <MainContainer>
        <Search />
        <CardGrid datas={sharedDatas} loading={isLoading} />
      </MainContainer>
    </>
  );
};

export default SharedPage;
