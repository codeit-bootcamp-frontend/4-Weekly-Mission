import { isMobile } from 'react-device-detect';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import GNB from 'components/common/gnb/GNB';

const Styled = {
  Body: styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 calc((100vw - 110rem) / 2 + 2rem);
    @media (max-width: 1199px) {
      padding: 0 3.2rem;
    }

    background-color: ${({ theme }) => theme.color.white};
    border-top: 1px solid #ccc; // 테스트용
  `,

  Container: styled.div`
    width: 100%;
  `,
};

function Layout({ children }) {
  const calculatePadding = () => {
    if (!isMobile) return '9.3rem';
    else return '6.3rem';
  };

  return (
    <Styled.Body className="layout-body">
      <GNB />
      <Styled.Container className="layout-container" style={{ paddingTop: calculatePadding() }}>
        <Outlet />
        {children}
      </Styled.Container>
    </Styled.Body>
  );
}

export default Layout;
