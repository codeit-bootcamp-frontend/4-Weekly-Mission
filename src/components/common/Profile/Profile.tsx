import React from "react";
import * as S from "./ProfileStyled.tsx";

interface ProfileProps {
  profile: {
    profileImageSource: string;
    email: string;
  };
}

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <S.Profile>
      <S.Image src={profile.profileImageSource} alt="프로필 이미지" />
      <S.Email>{profile.email}</S.Email>
    </S.Profile>
  );
};
