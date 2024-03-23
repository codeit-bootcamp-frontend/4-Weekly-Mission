import { styled } from 'styled-components';

import SearchBar from 'components/SearchBar';
import PLACEHOLDER from 'constants/FORM_MESSAGE';

import { Children } from 'interfaces/componentsInterface';

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 4rem calc((100vw - 110rem) / 2 + 2rem);

    @media (min-width: 768px) and (max-width: 1199px) {
      padding: 4rem 3.2rem;
    }
    @media (max-width: 767px) {
      padding: 2rem 3.2rem;
    }
  `,

  InnerWrap: styled.div`
    margin-top: 4rem;

    @media (max-width: 767px) {
      margin-top: 3.2rem;
    }
  `,
};

interface MainLayoutProps extends Children {}

/**
 * MainLayout - 검색바와 메인콘텐츠를 포함한 반응형 레이아웃
 */
function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Styled.Container>
        <SearchBar placeholder={PLACEHOLDER.SEARCH_LINK} />
        <Styled.InnerWrap>{children}</Styled.InnerWrap>
      </Styled.Container>
    </>
  );
}

export default MainLayout;
