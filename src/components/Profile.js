// import fbicon from "../assets/fbicon.svg";
import "./Profile.css";

function Profile({ profile, folderName }) {
  const { name, profileImageSource } = profile || {};
  const { name: folderNameValue } = folderName || {};
  return (
    <div>
      <div className="profile">
        <div className="profile-image">
          <img src={profileImageSource} alt={profileImageSource} />
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h2>{folderNameValue}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
