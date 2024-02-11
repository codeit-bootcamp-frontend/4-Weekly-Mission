import "./Folder.css";

export const Folder = ({ folder }) => {

  const { name, owner } = folder
  console.log(folder.name)

  return (
    <div className="Folder">
      <img className="Folder-profile" src={owner.profileImageSource} alt="profile-image" />
      <span className="Folder-owner">{owner.name}</span>
      <h2 className="Folder-folder">{name}</h2>
    </div>
  );
};
