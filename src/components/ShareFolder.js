import './ShareFolder.css';
import shareSnsList from '../constants/shareSnsList';

const ShareFolder = () => {
  const hadleClick = (e) => {
    console.log('::key::', e);
  };

  return (
    <div className="sns_area">
      {shareSnsList.map((item) => {
        return (
          <div key={item.title} onClick={hadleClick}>
            <div className={'icon_area ' + item.title_en + '_back'}>
              <div className={'icon ' + item.title_en + '_back_img'} />
            </div>
            <div className="sns_title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShareFolder;
