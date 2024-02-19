import "./FolderButton.css";

const FolderButton = ({ buttons, onFolderSelect }) => {
  return (
    <>
      <button onClick={() => onFolderSelect(null)}>
        <span>전체</span>
      </button>
      {buttons.map((button) => (
        <button key={button.id} onClick={() => onFolderSelect(button.id)}>
          <span>{button.name}</span>
        </button>
      ))}
    </>
  );
};

export default FolderButton;
