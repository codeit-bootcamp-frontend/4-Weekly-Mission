import './Header.css';

const Header = ({items}) => {
  const isFolderInfosAvailable = items && items.owner && items.name;

  return (
    <div className='container-header'>
      <div className="header-frame_ly">
        <div className='user_ly'>
          {isFolderInfosAvailable ? (
            <div className='avatar_ly'>
                <img className="avatar-img" src={items.owner.profileImageSource} alt={`${items.owner.name} 아바타`}/>
                <span className='avatar-name'>{items.owner.name}</span>
            </div>
          ) : (
            <button className='login-button'>회원가입</button>
          )}
          <span className='favorite'>{items.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Header;