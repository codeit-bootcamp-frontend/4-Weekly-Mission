import "../styles/Profile.css";

function Profile({ folder, user, proImg }) {
  return (
    <profile className="profile">
      <img src={proImg} alt="프로필 사진" className="img-profile" />
      <p className="user-name">{user}</p>
      <h1 className="folder-name">{folder}</h1>
    </profile>
  );
}

export default Profile;
