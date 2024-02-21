import '../styles/Folder.css';

const Folder = ({ folder, onClickFolder, isSelected }) => {
  const { id, name } = folder;
  return (
    <a className={`folder ${isSelected ? "folder-selected" : ""}`}
      onClick={() => onClickFolder({ id, name })}
    >
      {name}</a>
  );
}

export default Folder;