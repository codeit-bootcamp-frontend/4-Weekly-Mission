function Profile({ info }) {
  if (Object.keys(info).length === 0) {
    return <button className="btn cta">로그인</button>;
  }
  return (
    <div className="profile flex items-center">
      <img className="profile-img" src={info.profileImageSource} />
      <div className="profile-email">{info.email}</div>
    </div>
  );
}

export default Profile;
