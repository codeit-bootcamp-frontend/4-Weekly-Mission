import TopContentArea from '../components/TopContentArea';
import './TopBodyArea.css';

const TopBodyArea = ({ name, iconImage, folderName }) => {
  const folderInfo = { name, iconImage, folderName };
  return (
    <div className="top_body_area">
      <TopContentArea folderInfo={folderInfo}></TopContentArea>
    </div>
  );
};

export default TopBodyArea;
