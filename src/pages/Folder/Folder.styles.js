import styled from 'styled-components';
import { ActionButton } from '../../components/common/ActionButton/ActionButton.styles';
import SearchBar from '../../components/SearchBar/SearchBar';

export const FolderLayout = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const FolderAddBarBox = styled.div`
  width: 100%;
  padding: 3rem;
`;

export const FolderSection = styled.section`
  flex-grow: 1;
  padding: 0 3rem;
  background: var(--color-white);
  width: 100%;
`;

export const FolderSearchBarBox = styled.div`
  margin: 3rem 0;
`;

export const FolderSearchBar = styled(SearchBar)``;

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
