import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;
  font-size: 1.6rem;
  background-color: ${({ $active }) => ($active ? `var(--color-primary)` : 'inherit')};
  color: ${({ $active }) => ($active ? `var(--color-white)` : '#000')};
`;

const FolderNameButton = ({ name, id, selectedFolder, setFolderId, changeSelectedFolder }) => {
  const handleClick = () =>{
     changeSelectedFolder(name)
     setFolderId(id)
    };

  return name === selectedFolder ? (
    <Button $active onClick={handleClick}>
      {name}
    </Button>
  ) : (
    <Button onClick={handleClick}>{name}</Button>
  );
};
export default FolderNameButton;
