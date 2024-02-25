import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  .modal {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 360px;
    padding: 32px 40px;
    margin: auto;
    background-color: var(--white, #fff);
    border-radius: 15px;
    border: 1px solid var(--gray20, #ccd5e3);
  }
  .modal-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .modal-title {
    text-align: center;
    color: var(--gray100, #373740);
    font-size: 20px;
    font-weight: 700;
  }
  .folder-name {
    color: var(--gray60, #9fa6b2);
    text-align: center;
    font-size: 14px;
    line-height: 22px;
  }
  .input-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .shared-btn-box {
    display: flex;
    gap: 32px;
    .shared-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
`;
export const SharedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 37.333px;
  background-color: ${({ $background }) => $background ?? 'rgba(157, 157, 157, 0.04);'};
`;

export const AddFolderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  height: 172px;
  .add-folder-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 264px;
    padding: 8px;
    &:hover {
      border-radius: 8px;
      background: var(--background, #f0f6ff);
    }
    .add-folder-title {
      color: var(--gray100, #373740);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
    .folder-link-count {
      color: var(--gray60, #9fa6b2);
      font-size: 14px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
