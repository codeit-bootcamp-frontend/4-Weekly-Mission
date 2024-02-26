import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import GNB from 'components/common/gnb/GNB';
import Footer from 'components/common/footer/Footer';

const Styled = {
  Body: styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${({ theme }) => theme.color.white};
  `,

  Container: styled.div`
    padding-top: ${({ $isFixed }) => $isFixed && '9.25rem'};
  `,
};

function Layout({ children }) {
  const location = useLocation();
  const isFixed = location.pathname !== '/folder';
  console.log(isFixed);

  return (
    <>
      <GNB $isFixed={isFixed} />
      <Styled.Container className="layout-container" $isFixed={isFixed}>
        <Outlet />
        {children}
      </Styled.Container>
      <Footer />
    </>
  );
}

export default Layout;
