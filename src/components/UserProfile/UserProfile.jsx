import * as S from './UserProfile.styles';

const UserProfile = ({ title, image, direction }) => {
  return (
    <S.UserProfileSection $direction={direction}>
      <S.UserProfileImage src={image.URL || '/default-user.png'} $imageSize={image.size} alt='user' />
      <p>{title}</p>
    </S.UserProfileSection>
  );
};

export default UserProfile;
