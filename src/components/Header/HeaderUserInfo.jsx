function HeaderUserInfo({ profileImg, email }) {
  return (
    <div className='gnb__userInfo'>
      <img className='gnb__userImg' src={profileImg} alt='헤더 유저 이미지' />
      <span className='gnb__email'>{email}</span>
    </div>
  );
}

export default HeaderUserInfo;
