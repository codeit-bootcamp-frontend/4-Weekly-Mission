import '../../../style/floatingActionButton.css';
import addIcon from '../../../images/folderAdd.svg';

function FloatingActionButton() {
  return (
    <button className="floating-action-button">
      <p className="floating-action-button-text">폴더추가</p>
      <img src={addIcon} />
    </button>
  );
}

export default FloatingActionButton;
