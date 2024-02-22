import { Ul, Container } from "./style";
import AddFolder from "./AddFolder";

const FolderList = ({ folders, onClick, selectedFolder }) => {
  const handleClick = (e) => onClick(e);

  return (
    <Container>
      <Ul>
        {folders.map((item) => (
          <li
            key={item.id}
            id={item.id}
            onClick={handleClick}
            className={`${selectedFolder.id === item.id ? "selected" : ""}`}
          >
            {item.name}
          </li>
        ))}
      </Ul>
      <AddFolder />
    </Container>
  );
};

export default FolderList;
