import "./UserInformation.css";

function UserInformation({ folderOwnerData, folderNameData }) {
  return (
    <section className="UserInformation">
      <img
        src={folderOwnerData.profileImageSource}
        alt="avatarImg"
        className="user_image"
      />
      <p className="folder_owner">@{folderOwnerData.name}</p>
      <h1 className="folder_name">{folderNameData}</h1>
    </section>
  );
}

export default UserInformation;
