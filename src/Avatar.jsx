import './Avatar.css';

const Avatar = ({sharedFolder}) => {
  const isShowFolderInfos = sharedFolder && sharedFolder.owner && sharedFolder.name;

  return (
    <div className='container-header'>
      <div className="header-frame_ly">
        <div className='user_ly'>
          {isShowFolderInfos ? (
            <div className='avatar_ly'>
                <img className="avatar-img" src={sharedFolder.owner.profileImageSource} alt={`${sharedFolder.owner.name} 아바타`}/>
                <span className='avatar-name'>{sharedFolder.owner.name}</span>
            </div>
          ) : (
            <button className='login-button'>회원가입</button>
          )}
          <span className='favorite'>{sharedFolder.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Avatar;