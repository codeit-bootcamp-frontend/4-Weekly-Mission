import "./FolderInformation.css";
import rabbitImg from "../../assets/rabbit-icon.png";

function UserInformation({ folderOwnerData, folderNameData }) {
  return (
    <section className="FolderInformation">
      {folderOwnerData ? (
        <img
          src={folderOwnerData.profileImageSource}
          alt="userImg"
          className="user_image"
        />
      ) : (
        <img src={rabbitImg} alt="rabbitImg" className="user_image" />
      )}
      <p className="folder_owner">@{folderOwnerData.name}</p>
      <h1 className="folder_name">{folderNameData}</h1>
    </section>
  );
}

export default UserInformation;
