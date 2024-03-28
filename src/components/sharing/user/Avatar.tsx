const DEFAULT_USER_ICON_URL = "/assets/icons/default_profile.svg";

interface Props {
  avatarImage?: string;
  width?: string;
  height?: string;
}

const Avatar = ({
  avatarImage = DEFAULT_USER_ICON_URL,
  width,
  height,
}: Props) => {
  const avatarStyle: React.CSSProperties = {
    width,
    height,
    objectFit: "cover",
    borderRadius: "50%",
  };

  return <img src={avatarImage} alt="user profile" style={avatarStyle} />;
};

export default Avatar;
