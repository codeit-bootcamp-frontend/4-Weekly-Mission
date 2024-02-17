import React from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';
import { useSampleFolderQuery } from 'hook/useFetchData';
import { calculateTime, formatDate } from 'utils/date';
import CardError from 'components/common/main/CardError';

const SharedPage = () => {
  const {
    data: sharedDatas,
    isLoading,
    isError,
  } = useSampleFolderQuery('cardDatas', data =>
    data?.folder.links.map(link => ({
      ...link,
      timePassed: calculateTime(link.createdAt),
      formattedDate: formatDate(link.createdAt),
    })),
  );

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
