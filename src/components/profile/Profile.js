import "./profile.css";

function Profile({ userData }) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const ownerProfileImageSource =
    userData.owner?.profileImageSource ?? "유저 프로필 이미지";
  const ownerName = userData.owner?.name ?? "유저이름";
  const titleName = userData.name ?? "타이틀 이름";

  return (
    <div className="userTitle">
      <div>
        <div className="titleTop">
          <img src={ownerProfileImageSource} alt="유저프로필" />
          <p>{ownerName}</p>
        </div>
        <div className="titleBottom">
          <h2>{titleName}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
