import { ProfileDataType } from "typeStore";
import * as S from "./Profile.styled";

interface ProfileProps {
  userData: ProfileDataType;
}

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <S.ProfileBlock>
      <S.ProfileImgBox>
        <S.ProfileImg src={userData.profileImageSource} alt="프로필사진" />
      </S.ProfileImgBox>
      <S.ProfileEmail>{userData.email}</S.ProfileEmail>
    </S.ProfileBlock>
  );
};

export default Profile;
