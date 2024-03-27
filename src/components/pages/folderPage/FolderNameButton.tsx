import { ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  height: 3.7rem;
  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;
  font-size: 1.6rem;
  background-color: ${({ $active }) => ($active ? `var(--color-primary)` : 'inherit')};
  color: ${({ $active }) => ($active ? `var(--color-white)` : '#000')};
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
    height: 3.1rem;
  }
`;

interface FolderNameButtonProps {
  id: string | number;
  selectedFolderId: string | number;
  onFolderNameClick: (id: string | number) => void;
  children?: ReactNode;
}

const FolderNameButton = ({ id, selectedFolderId, onFolderNameClick, children }: FolderNameButtonProps) => {
  const handleBtnClick = () => {
    onFolderNameClick(id);
  };

  return id === selectedFolderId ? (
    <Button $active onClick={handleBtnClick}>
      {children}
    </Button>
  ) : (
    <Button onClick={handleBtnClick}>{children}</Button>
  );
};
export default FolderNameButton;
