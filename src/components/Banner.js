import './Banner.css';

const Banner = ({ name, owner }) => {
  console.log(name, owner);
  return (
    <div className="Banner">
      <div className="info-area">
        <div className="user-owner-area">
          <div className="user-owner-img">
            <img src={owner.profileImageSource} alt="프로필 이미지" />
          </div>
          <span>{owner.name}</span>
        </div>
        <span className="folder-name">{name}</span>
      </div>
    </div>
  );
};

export default Banner;
