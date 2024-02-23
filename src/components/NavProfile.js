function NavProfile({ userData }) {
  return (
    <div className="headerWrap__profile">
      <img
        className="headerWrap__profile--img"
        src={userData.image_source}
        alt="ProfileImg"
      />
      <p className="headerWrap__profile--email">{userData.email}</p>
    </div>
  );
}

export default NavProfile;
