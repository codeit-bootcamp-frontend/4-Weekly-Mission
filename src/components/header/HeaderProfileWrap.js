function HeaderProfileWrap({ userEmail, userImg }) {
  return (
    <div className="headerWrap__profile">
      <img
        className="headerWrap__profile--img"
        src={userImg}
        alt="ProfileImg"
      />
      <p className="headerWrap__profile--email">{userEmail}</p>
    </div>
  );
}

export default HeaderProfileWrap;
