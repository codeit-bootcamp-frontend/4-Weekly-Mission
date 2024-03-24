import React from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';
import { useSampleFolderQuery } from 'hook/useFetchData';
import CardError from 'components/common/main/CardError';
import Loader from 'components/common/Loader';

const SharedPage: React.FC = () => {
  const { data, isLoading, isError } = useSampleFolderQuery('sharedDatas');
  const sharedDatas = data?.folder.links;

  if (isError) {
    return <CardError />;
  }
  return (
    <>
      <SharedHeader />
      <MainContainer>
        <Search links={sharedDatas} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CardGrid datas={sharedDatas} isFolder={false} />
          </>
        )}
      </MainContainer>
    </>
  );
};

export default SharedPage;
