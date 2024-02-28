import addButtonIcon from '../../assets/add.svg';
import './PopAddFolderButton.css';

const PopAddFolderButton = () => {
  return (
    <div className="pop_button_area">
      <div className="add_folder_button_area">
        <p className="add_folder_button">폴더 추가</p>
        <img src={addButtonIcon} />
      </div>
    </div>
  );
};

export default PopAddFolderButton;
