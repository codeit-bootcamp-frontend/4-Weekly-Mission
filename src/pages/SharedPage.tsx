import React, { useEffect, useState } from 'react';
import SharedHeader from 'components/common/header/shared/SharedHeader';
import Search from 'components/common/main/Search';
import { MainContainer } from 'styles/MainContainer';
import CardGrid from 'components/common/main/CardGrid';
import { useSampleFolderQuery } from 'hook/useFetchData';
import CardError from 'components/common/main/CardError';
import Loader from 'components/common/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';
import filterByKeyword from 'utils/filterByKeyword';

const SharedPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get('keyword'),
  );

  const { data, isLoading, isError } = useSampleFolderQuery('sharedDatas');
  const sharedDatas = data?.folder.links;
  const filteredLinks = filterByKeyword(sharedDatas || [], searchTerm);
  console.log(filteredLinks);
  const hasFilteredLinks = filteredLinks.length !== 0;

  useEffect(() => {
    setSearchTerm(searchParams.get('keyword'));
  }, [searchParams]);

  if (isError) {
    return <CardError description="😰 저장된 링크가 없습니다." />;
  }
  return (
    <>
      <SharedHeader />
      <MainContainer>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          url={location.pathname}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {hasFilteredLinks ? (
              <CardGrid datas={filteredLinks} isFolder={false} />
            ) : (
              <CardError description="😰 일치하는 검색 결과가 없습니다." />
            )}
          </>
        )}
      </MainContainer>
    </>
  );
};

export default SharedPage;
