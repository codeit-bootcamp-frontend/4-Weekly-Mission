import styled from 'styled-components'

export const HeaderNavContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #edf7ff;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 50px;

  .user-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .user-profile {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
  }
  .menu {
    font-size: 40px;
    font-weight: 600;
    margin: 0;
  }

  /* tablet & mobile */
  @media screen and (min-width: 375px) and (max-width: 1199px) {
    padding: 32px;
  }
`;