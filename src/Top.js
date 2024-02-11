import './Top.css';

const Top = ({className, owner, name}) => {
  return (
    <div className={className}>
      <div className="top-frame_ly">
        <div className='user_ly'>
          <div className='avatar_ly'>
            <img className="avatar-img" src={owner.profileImageSource} alt="아바타 이미지"/>
            <span className='avatar-name'>{owner.name}</span>
          </div>
          <span className='favorite'>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default Top;