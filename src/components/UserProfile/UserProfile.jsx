import { DEFAULT_USER_IMAGE } from '../../constant/constant';

import * as S from './UserProfile.styles';

const UserProfile = ({ title, image, direction }) => {
  return (
    <S.UserProfileSection $direction={direction}>
      <S.UserProfileImage src={image.URL || DEFAULT_USER_IMAGE} $imageSize={image.size} alt='user' />
      <p>{title}</p>
    </S.UserProfileSection>
  );
};

export default UserProfile;
