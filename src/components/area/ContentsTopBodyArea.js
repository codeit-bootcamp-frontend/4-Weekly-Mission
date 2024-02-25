import TopContentArea from './TopContentArea';
import './ContentsTopBodyArea.css';

const TopBodyArea = (props) => {
  return (
    <div className="top_body_area">
      <TopContentArea folderInfo={props} />
    </div>
  );
};

export default TopBodyArea;
