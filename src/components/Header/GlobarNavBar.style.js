import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #edf7ff;
  padding: 20px 200px;

  @media screen and (min-width: 375px) and (max-width: 1199px) {
    padding: 32px;
  }

  .gnb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 53px;
    max-width: 1920px;
  }

  .user-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .user-img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .user-text {
      font-size: 14px;
    }
  }

  .cta {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
    border-radius: 8px;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    padding: 16px 20px;
  }

  .cta-short {
    width: 128px;
  }
`;