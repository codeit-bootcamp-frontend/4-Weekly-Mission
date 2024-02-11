import { isMobile } from 'react-device-detect';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import GNB from 'components/common/gnb/GNB';
import Footer from 'components/common/footer/Footer';
import Header from 'components/common/header/Header';

const Styled = {
  Body: styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${({ theme }) => theme.color.white};
  `,

  Container: styled.div`
    width: 100%;
    padding: 0 calc((100vw - 110rem) / 2 + 2rem);
    @media (max-width: 1199px) {
      padding: 0 3.2rem;
    }
  `,
};

function Layout({ children }) {
  const calculatePadding = () => {
    if (!isMobile) return '4rem';
    else return '2rem';
  };

  return (
    <Styled.Body className="layout-body">
      <GNB />
      {/* <Header /> */}
      <Styled.Container className="layout-container" style={{ paddingTop: calculatePadding() }}>
        <Outlet />
        {children}
      </Styled.Container>
      <Footer />
    </Styled.Body>
  );
}

export default Layout;
