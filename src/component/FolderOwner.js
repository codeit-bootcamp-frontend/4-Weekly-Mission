const FolderOwner = ({ name, owner = {} }) => {
  return (
    <div className="FolderOwner">
      <img src={owner.profileImageSource} alt="폴더 소유자 프로필 이미지" />
      <div>{owner.name}</div>
      <div>{name}</div>
    </div>
  );
};

export default FolderOwner;
