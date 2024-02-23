import styled from 'styled-components';

export const FolderPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FolderPageHeader = styled.header`
  background: var(--color-gray-bg);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 23px 90px;
`;

export const HeaderSearch = styled.div`
  width: 800px;
`;

export const FolderPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1060px;
  padding: 40px 32px 100px 32px;

  /* Tablet */
  @media (max-width: 1124px) {
    & {
      width: 100%;
    }
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentEmptyBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
`;

export const ContentTabBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
`;

export const ContentTabAdd = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--color-primary);
  font-size: 16px;
  white-space: nowrap;
  margin-top: 4px;
  gap: 4px;

  /* Mobile */
  @media (max-width: 767px) {
    background-color: var(--color-primary);
    border-radius: 20px;
    color: var(--color-gray-10);
    position: fixed;
    bottom: 101px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 8px 24px;
    width: 135px;
    z-index: 1;

    svg g path {
      fill: var(--color-gray-10);
    }
  }
`;

export const ContentTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentTitle = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const ContentOptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const ContentOptionItem = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--color-gray-60);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  gap: 4px;
`;
