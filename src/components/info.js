import '../styles/info.css';

const Info = ({ folderInfo }) => {
  const folderImage = folderInfo?.folder.owner.profileImageSource;
  const folderUsername = folderInfo?.folder.owner.name;
  const folderName = folderInfo?.folder.name;

  return (
    <div className='folder-info'>
      <div className='folder-profile'>
        <div className='folder-user'>
          <img className='folder-image' src={folderImage} alt='폴더의 프로필 이미지.' />
          <p className='folder-username'>@{folderUsername}</p>
        </div>
        <h1 className='folder-name'>{folderName}</h1>
      </div>
    </div>
  );
};

export default Info;
