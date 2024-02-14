import './TopBodyArea.css';
import codeitIcon from '../assets/icon-codeit.svg';

const ContentArea = ({ name, folderName }) => {
  return (
    <div className="codeit-icon_area">
      <div className="codeit-icon_background">
        <img src={codeitIcon} alt="codeit" className="codeit_icon" />
      </div>
      <p className="codeit_text">@{name}</p>
      <p className="title_text">{folderName}</p>
    </div>
  );
};

export const TopBodyArea = ({ name, folderName }) => {
  return (
    <div className="top_body_area">
      <ContentArea name={name} folderName={folderName}></ContentArea>
    </div>
  );
};
