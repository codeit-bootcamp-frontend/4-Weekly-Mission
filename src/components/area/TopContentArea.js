import './TopContentArea.css';

const TopContentArea = ({ folderInfo }) => {
  const { name, folderName, iconImage } = folderInfo;
  return (
    <div className="codeit-icon_area">
      <img src={iconImage} alt="codeit" className="codeit_icon" />
      <p className="codeit_text">@{name}</p>
      <p className="title_text">{folderName}</p>
    </div>
  );
};

export default TopContentArea;
