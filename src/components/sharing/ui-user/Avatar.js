const DEFAULT_USER_ICON_URL = "icons/default_user_icon.svg";
const Avatar = ({ avatarImage = DEFAULT_USER_ICON_URL, width, height }) => {
  const avatarStyle = {
    width,
    height,
    objectFit: "cover",
    borderRadius: "50%",
  };
  return <img src={avatarImage} alt="user profile" style={avatarStyle} />;
};

export default Avatar;
