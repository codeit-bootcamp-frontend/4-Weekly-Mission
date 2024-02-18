import './ListTitleArea.css';
import shareIcon from '../assets/icon_share.svg';
import deleteIcon from '../assets/icon_delete.svg';
import editIcon from '../assets/icon_edit.svg';

const ListTitleArea = ({ title }) => {
  return (
    <div className="list_title_area">
      <h1 className="list_title_text">{title ? title : '전체'}</h1>
      <div className="list_title_button_area">
        <p className="icon_text">
          <img src={shareIcon} />
          공유
        </p>
        <p className="icon_text">
          <img src={deleteIcon} />
          이름변경
        </p>
        <p className="icon_text">
          <img src={editIcon} />
          삭제
        </p>
      </div>
    </div>
  );
};

export default ListTitleArea;
