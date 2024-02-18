const FolderInfo = ({ data }) => {
  console.log(data?.folder?.owner?.name);
  return (
    <div>
      <div>{data?.folder.owner.name}</div>
      <div>{data?.folder.owner.profileImageSource}</div>
      <div>{data?.folder.name}</div>
    </div>
  );
};

export default FolderInfo;
