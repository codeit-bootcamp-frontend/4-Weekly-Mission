import * as S from "./ProfileStyled";

interface UserProfileInfo {
  userEmail: string;
  userImgSource: string;
}

export const Profile = ({ userEmail, userImgSource }: UserProfileInfo) => {
  return (
    <S.ProfileContainer>
      <S.ProfileImage src={userImgSource} alt="프로필 이미지" />
      <S.ProfileEmail>{userEmail}</S.ProfileEmail>
    </S.ProfileContainer>
  );
};
