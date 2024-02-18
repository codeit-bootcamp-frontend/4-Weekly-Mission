import { ProfileEmail, ProfileImage, StyledProfile } from "./ProfileCss";

export const Profile = ({ profile }) => {
  return (
    <StyledProfile>
      <ProfileImage src={profile.image_source} alt="프로필 이미지" />
      <ProfileEmail>{profile.email}</ProfileEmail>
    </StyledProfile>
  );
};
