import styled from 'styled-components';

const Button = styled.button`
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

const FolderNameButton = ({ name, id, selectedFolder, handleCurrentFolder }) => {
  const handleBtnClick = () => {
    handleCurrentFolder(id, name);
  };

  return name === selectedFolder ? (
    <Button $active onClick={handleBtnClick}>
      {name}
    </Button>
  ) : (
    <Button onClick={handleBtnClick}>{name}</Button>
  );
};
export default FolderNameButton;
