import './ShareFolder.css';

const ShareFolder = () => {
  return (
    <div className="sns_area">
      <div>
        <div className="icon_area kakao_back">
          <div className="icon kakao_back_img"></div>
        </div>
        <div className="sns_title">카카오톡</div>
      </div>
      <div>
        <div className="icon_area facebook_back">
          <div className="icon facebook_back_img"></div>
        </div>
        <div className="sns_title">페이스북</div>
      </div>
      <div>
        <div className="icon_area share_back">
          <div className="icon share_back_img"></div>
        </div>
        <div className="sns_title">링크복사</div>
      </div>
    </div>
  );
};

export default ShareFolder;
