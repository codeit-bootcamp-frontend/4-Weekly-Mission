import "./AddFolderButton.css";

const AddFolderButton = () => {
  return (
    <button className="addfolder-container">
      <span>폴더 추가</span>
      <img className="icon" src="images/add.svg"/>
    </button>
  );
};

export default AddFolderButton;