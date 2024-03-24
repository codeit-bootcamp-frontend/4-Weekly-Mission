import "./Folder.css";

interface FolderProps {
  folderName: string | null;
  owner: Owner | null;
}
interface Owner {
  profileImageSource: string;
  name: string;
}
export default function Folder({ folderName, owner }: FolderProps) {
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
