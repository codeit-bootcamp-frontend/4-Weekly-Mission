const FolderInfo = ({ data, name }) => {
  console.log(data);
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.profileImageSource}</div>
      <div>{name}</div>
    </div>
  );
};

export default FolderInfo;
