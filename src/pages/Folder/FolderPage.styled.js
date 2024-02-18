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
  padding-top: 40px;
  padding-bottom: 100px;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export const ContentEmptyBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
`;
