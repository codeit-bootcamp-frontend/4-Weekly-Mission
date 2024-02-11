import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #edf7ff;
  gap: 20px;
  padding: 20px;

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
`;
