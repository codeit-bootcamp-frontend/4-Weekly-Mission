import './Profile-main.css';
import sampleProfileURL from '../../../assets/img/white-profile.png';

function ProfileMain({ folderOwner, folderName }) {
  return (
    <div className="center">
      {folderOwner ? (
        <>
          <img
            src={folderOwner.profileImageSource}
            alt="user profile"
            className="profile-main-img real"
          />
          <p className="text center">{folderOwner.name}</p>
          <div className="folder-name">{folderName}</div>
        </>
      ) : (
        <>
          <img
            src={sampleProfileURL}
            alt="sample profile"
            className="profile-main-img sample"
          />
          <p className="text center">@코드잇</p>
          <div className="folder-name">⭐️ 즐겨찾기</div>
        </>
      )}
    </div>
  );
}

export default ProfileMain;
