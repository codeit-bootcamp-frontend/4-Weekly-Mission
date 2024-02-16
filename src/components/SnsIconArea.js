import ICON_PATH from '../constants/ICON_PATH';

const SnsIconArea = () => {
  return (
    <div className="sns_icon_area">
      {Object.entries(ICON_PATH).map(([key, value]) => {
        return <img src={value} alt={key} key={key} />;
      })}
    </div>
  );
};

export default SnsIconArea;
