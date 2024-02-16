import styled from 'styled-components';
import { ActionButton } from '../../components/common/ActionButton/ActionButton.styles';

export const FolderLayout = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const FolderSection = styled.section`
  flex-grow: 1;
  background: var(--color-white);
  width: 100%;
`;

export const FolderBox = styled.div`
  margin: 2rem 5rem;
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
