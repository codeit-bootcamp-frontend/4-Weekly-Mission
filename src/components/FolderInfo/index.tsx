import "./FolderInfo.css";

interface Profile {
  owner?: {
    name: string;
    profileImageSource: string;
  };
  name?: string;
}

interface Props {
  profile: Profile;
}

export const FolderInfo = ({ profile }: Props) => {
  const { name: ownerName, profileImageSource } = profile?.owner || {};
  const { name: folderName } = profile || {};
  return (
    <div className="folderInfo">
      <img
        className="folderInfo-profile"
        src={profileImageSource}
        alt="폴더 소유자의 프로필 이미지"
      />
      <span className="folderInfo-owenrName">{ownerName}</span>
      <span className="folderInfo-folderName">{folderName}</span>
    </div>
  );
};
