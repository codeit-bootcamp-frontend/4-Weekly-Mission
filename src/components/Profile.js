const Profile = ({ userData }) => {
  return (
    <div className="Profile">
      {userData ? (
        <>
          <a href="/">
            <img src={userData.profileImageSource} alt="프로필 이미지" />
          </a>
          <a href="/">
            <p>{userData.email}</p>
          </a>
        </>
      ) : (
        <a className="cta cta-short" href="/">
          <span>로그인</span>
        </a>
      )}
    </div>
  );
};

export default Profile;
