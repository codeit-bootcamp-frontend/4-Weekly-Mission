const Avatar = ({ avatarImage, width, height }) => {
  const avatarStyle = {
    width: width,
    height: height,
    borderRadius: "50%",
  };
  return <img src={avatarImage} alt={avatarImage} style={avatarStyle} />;
};

export default Avatar;
