import './FolderNames.css';
import addIcon from '../assets/purple_add.svg';

const FolderNames = ({ folders }) => {
  return (
    <div className="folder_button_area">
      <div className="folder_buttons_area">
        {folders &&
          folders.map((folder) => {
            return (
              <div
                className={'folder_button ' + (folder.id === 14 && 'purple')}
                key={folder.id}
              >
                {folder.name}
              </div>
            );
          })}
      </div>
      <div className="add_folder_text_area">
        <p className="add_folder_text">폴더추가</p>
        <img src={addIcon} />
      </div>
    </div>
  );
};

export default FolderNames;
