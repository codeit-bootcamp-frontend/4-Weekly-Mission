import styled from 'styled-components';

export const ContentHeaderContainer = styled.section`
  padding: 6rem 0 9rem;
  background-color: #edf7ff;
  @media all and (min-width: 375px) and (max-width: 1124px) {
    padding: 6rem 3.2rem 9rem;
  }
  .add-link-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px 20px;
    border-radius: 15px;
    border: 1px solid #6d6afe;
    background: #fff;

    .input-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      flex-grow: 1;
      & input {
        flex-grow: 1;
        border: none;
        font-size: 1.6rem;
        line-height: 24px;
      }
      & input::placeholder {
        color: #9fa6b2;
      }
    }
  }
`;

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1060px;
  margin: 40px auto 0;

  /* tablet */
  @media all and (max-width: 1124px) {
    padding: 0 32px;
    justify-content: center;
  }
  .folder-list-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 25px 20px;
  flex-wrap: wrap;
  @media all and (max-width: 1124px) {
    justify-content: center;
  }
`;

export const FolderButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .folder-btn-box {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    .folder-btn {
      border-radius: 5px;
      border: 1px solid #6d6afe;
      padding: 8px 12px;
      color: #000;
      font-size: 16px;
    }
    .folder-btn:hover,
    .active {
      color: #fff;
      background: #6d6afe;
    }
  }
  @media all and (min-width: 375px) and (max-width: 767px) {
    .add-folder-btn {
      position: fixed;
      bottom: 101px;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 24px;
      border-radius: 20px;
      border: 1px solid #fff;
      background: #6d6afe;
      z-index: 11;
      color: #fff;
    }
  }
`;

export const CurrentName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.2px;
  }
  .folder-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .control-btn {
      display: flex;

      gap: 4px;
    }
  }
`;

export const NoFolderLink = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 41px 0 35px;
  height: 200px;
`;

export const AddFolder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #6d6afe;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  white-space: nowrap;
`;
