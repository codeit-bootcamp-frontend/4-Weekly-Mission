import { styled } from 'styled-components';

import { Children } from 'interfaces/componentsInterface';

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 4rem calc((100vw - 110rem) / 2 + 2rem);
    margin-bottom: 6rem;

    @media (min-width: 768px) and (max-width: 1199px) {
      padding: 4rem 3.2rem;
    }
    @media (max-width: 767px) {
      padding: 2rem 3.2rem;
    }
  `,
};

/**
 * MainLayout - 검색바와 메인콘텐츠를 포함한 반응형 레이아웃
 */

interface MainLayoutProps extends Children {}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Styled.Container>{children}</Styled.Container>
    </>
  );
}

export default MainLayout;
