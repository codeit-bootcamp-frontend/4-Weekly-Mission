import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: ${({ sticky }) => (sticky ? `sticky` : `static`)};
  ${({ sticky }) => (sticky ? `top: 0;` : ``)};

  padding: 20px 200px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  z-index: 3;
  background: #f0f6ff;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    flex-shrink: 0;
  }

  @media (min-width: 1920px) {
    width: 100%;
    padding-left: calc((100% - 1520px) / 2);
    padding-right: calc((100% - 1520px) / 2);
    background: #f0f6ff;
    box-sizing: border-box;
    overflow: hidden;

    & > div {
      width: 1520px;
    }
  }
  @media (max-width: 1199px) {
    padding-left: calc(200px - (1199px - 100vw) / 2);
    padding-right: calc(200px - (1199px - 100vw) / 2);

    & > div {
      width: 799px;
    }
  }
  @media (max-width: 869px) {
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
    overflow: hidden;

    & > div {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    padding-top: 13px;
    padding-bottom: 13px;
  }
`;

export default Header;
