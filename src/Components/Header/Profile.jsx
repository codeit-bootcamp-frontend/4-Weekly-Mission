import "./css/Profile.css";

function Profile({ email, profileImageSource }) {
  return (
    <div className="profile_container">
      {profileImageSource ? (
        <img
          src={profileImageSource}
          alt={profileImageSource}
          className="profile_img"
        />
      ) : (
        <img
          src="Icons/user_icon.png"
          alt="default_icon"
          className="profile_img"
        />
      )}

      <p className="profile_txt">{email}</p>
    </div>
  );
}

export default Profile;
