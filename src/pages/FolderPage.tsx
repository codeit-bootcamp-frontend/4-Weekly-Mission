import { useInView } from 'react-intersection-observer';
import AddLink from 'components/common/header/folder/AddLink';
import { HeaderContainer } from 'styles/HeaderContainer';
import React, { useEffect, useState } from 'react';
import { MainContainer } from 'styles/MainContainer';
import Search from 'components/common/main/Search';
import { useCategoryQuery, useFolderQuery } from 'hook/useFetchData';
import CategoryContext from 'contexts/CategoryContext';
import CategoryTabList from 'components/folder/CategoryTabList';
import Loader from 'components/common/Loader';
import CardGrid from 'components/common/main/CardGrid';
import CardError from 'components/common/main/CardError';
import filterByKeyword from 'utils/filterByKeyword';
import { useLocation, useSearchParams } from 'react-router-dom';
import FixedAddLink from 'components/common/header/folder/FixedAddLink';

const FolderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get('keyword'),
  );
  const [currentCategory, setCurrentCategory] = useState<{
    id: string;
    name: string;
  }>({
    id: 'all',
    name: '전체',
  });

  const folderId = currentCategory.id === 'all' ? '' : currentCategory.id;

  const { data: folderDatas, isLoading } = useFolderQuery({
    queryKey: folderId.toString(),
    folderId: folderId,
  });
  const filteredLinks = filterByKeyword(folderDatas?.data || [], searchTerm);
  const hasFilteredLinks = filteredLinks.length !== 0;

  useEffect(() => {
    setSearchTerm(searchParams.get('keyword'));
  }, [searchParams]);

  const { data: datas } = useCategoryQuery('category', 1);
  const categoryDatas = datas?.data && [
    { id: 'all', name: '전체' },
    ...datas?.data,
  ];

  const handleCategoryButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentCategory({
      id: e.currentTarget.id,
      name: e.currentTarget.innerText,
    });
  };
  const [headerRef, inHeaderView] = useInView();
  const [footerRef, inFooterView] = useInView();
  return (
    <CategoryContext.Provider value={datas}>
      <HeaderContainer ref={headerRef}>
        <AddLink isBottom={false} />
      </HeaderContainer>
      <MainContainer>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          url={location.pathname}
        />
        <CategoryTabList
          categoryDatas={categoryDatas}
          currentCategory={currentCategory.name}
          handleCategoryButton={handleCategoryButton}
          categoryId={folderId}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {hasFilteredLinks ? (
              <CardGrid datas={filteredLinks} isFolder={true} />
            ) : (
              <CardError description="😰 일치하는 검색 결과가 없습니다." />
            )}
          </>
        )}
        {!inHeaderView && !inFooterView && <FixedAddLink />}
      </MainContainer>
      <div ref={footerRef}></div>
    </CategoryContext.Provider>
  );
};

export default FolderPage;
