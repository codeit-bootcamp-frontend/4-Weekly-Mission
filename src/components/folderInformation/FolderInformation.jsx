import "./FolderInformation.css";
import rabbitImg from "../../assets/rabbit-icon.png";

function FolderInformation({ folderOwners, folderName }) {
  return (
    <section className="FolderInformation">
      {folderOwners ? (
        <img
          src={folderOwners.profileImageSource}
          alt="userImg"
          className="user_image"
        />
      ) : (
        <img src={rabbitImg} alt="rabbitImg" className="user_image" />
      )}
      <p className="folder_owner">@{folderOwners.name}</p>
      <h1 className="folder_name">{folderName}</h1>
    </section>
  );
}

export default FolderInformation;
