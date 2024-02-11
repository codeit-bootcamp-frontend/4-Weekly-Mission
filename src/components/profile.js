function Profile({ info }) {
  if (info) {
    return (
      <div className="profile flex items-center">
        <img className="profile-img" src={info.profileImageSource} />
        <div className="profile-email">{info.email}</div>
      </div>
    );
  }
}

export default Profile;
