import useInformationData from '../hooks/useInformationData';
function Information(url) {
  const myInfo = useInformationData(url);

  if (!myInfo) {
    return <button>로그인</button>;
  }

  return (
    <div className="nav__info">
      <img
        className="info--image"
        src={myInfo.profileImageSource || myInfo.data[0].image_source}
        alt="ProfileImg"
      />
      <span className="info--email">
        {myInfo.email || myInfo.data[0].email}
      </span>
    </div>
  );
}

export default Information;
