import styled from 'styled-components';

import { ActionButton } from '../../components/common/ActionButton/ActionButton.styles';

export const FolderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const FolderAddBarBox = styled.div`
  width: 100%;
  padding: 3rem 4rem;
`;

export const FolderSection = styled.section`
  flex-grow: 1;
  width: 100%;
  padding: 0 4rem;
  background: var(--color-white);
`;

export const FolderSearchBarBox = styled.div`
  margin: 2rem 0;
`;

export const FolderBox = styled.div`
  margin: 2rem 0;
`;

export const FolderTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FolderActionButton = styled(ActionButton)`
  @media screen and (width >767px) {
    display: none;
  }

  font-size: 1.2rem;
`;
