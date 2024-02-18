import "./Folder.css";

export default function Folder({ user, folderName, owner }) {
  const { profileImageSource, name } = owner || {};
  //   const folderInfo = () => {
  //     return <div></div>;
  //   };

  return (
    <div className="folder">
      <img
        className="owner-img"
        src={profileImageSource}
        alt="프로필 이미지"
      ></img>
      <div>@{name}</div>
      <h1>{folderName}</h1>
    </div>
  );
}
