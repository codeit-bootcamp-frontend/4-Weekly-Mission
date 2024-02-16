function MainProfileWrap({ myProfileImg, myName, myFolderName }) {
  return (
    <div className="topContainer">
      <div className="topContainer__profile">
        <img
          className="topContainer__profile--img"
          src={myProfileImg}
          alt="myProfileImg"
        />
        <p className="topContainer__profile--name">{myName}</p>
      </div>
      <p className="topContainer__myFolderName">{myFolderName}</p>
    </div>
  );
}

export default MainProfileWrap;
