import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { GridTemplate } from 'styles/commonStyle';
import { styled } from 'styled-components';

import PageTitle from 'components/common/PageTitle';
import ShareHeader from 'components/share/ShareHeader';
import MainLayout from 'components/template/MainLayout';
import SearchBar from 'components/SearchBar';
import Card from 'components/common/card/Card';

import PLACEHOLDER from 'constants/FORM_MESSAGE';
import useSampleFolderQuery from 'hooks/api/folder/useSampleFolderQuery';
import filterDataBySearchKeyword from 'utils/filterDataBySearchKeyword';

const Styled = {
  SearchResult: styled.div`
    margin-top: 4rem;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.82rem;

    color: ${({ theme }) => theme.color.gray4};
    span {
      color: ${({ theme }) => theme.color.black};
    }

    @media (max-width: 767px) {
      margin-top: 3.2rem;

      font-size: 2.4rem;
      line-height: 2.86rem;
    }
  `,

  NoLink: styled.div`
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Cards: styled.div`
    margin-top: 4rem;

    @media (max-width: 767px) {
      margin-top: 3.2rem;
    }
  `,
};

function LinkSharePage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword'));

  const { data } = useSampleFolderQuery();
  const folderData = data?.data.folder;

  useEffect(() => {
    setKeyword(searchParams.get('keyword'));
  }, [searchParams]);

  const filteredLinks = filterDataBySearchKeyword(folderData?.links || [], keyword);
  const hasFilteredLinks = filteredLinks.length !== 0;

  return (
    <>
      <PageTitle title="링크 공유" />
      <ShareHeader folderData={folderData} />
      <MainLayout>
        <SearchBar placeholder={PLACEHOLDER.SEARCH_LINK} uri={location.pathname} />
        {keyword && (
          <>
            <Styled.SearchResult>
              <span>{keyword}</span>(으)로 검색한 결과입니다.
            </Styled.SearchResult>
            {!hasFilteredLinks && <Styled.NoLink>검색 결과가 없습니다 😢</Styled.NoLink>}
          </>
        )}

        {hasFilteredLinks && (
          <Styled.Cards>
            <GridTemplate>
              {filteredLinks.map((link) => (
                <Card
                  key={link.id}
                  createdAt={link.createdAt}
                  url={link.url}
                  description={link.description}
                  imageSource={link.imageSource}
                />
              ))}
            </GridTemplate>
          </Styled.Cards>
        )}
      </MainLayout>
    </>
  );
}

export default LinkSharePage;
