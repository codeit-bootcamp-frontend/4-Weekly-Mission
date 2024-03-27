import { styled } from 'styled-components';

import defaultProfileImg from 'assets/profileImg.svg';
import { UserInfoData } from 'interfaces/dataInterface';

const Styled = {
  UserBtn: styled.button`
    display: flex;
    align-items: center;
  `,

  ProfileImgContainer: styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 999rem;
    background-color: white;
    overflow: hidden;
  `,

  ProfileImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ProfileUserName: styled.div`
    font-size: 1.4rem;
    margin-left: 0.5rem;

    @media (max-width: 767px) {
      display: none;
    }
  `,
};

function UserBtn({ userData }: { userData: UserInfoData }) {
  const { image_source: profileImg = defaultProfileImg, email = '' } = userData || {};

  return (
    <Styled.UserBtn>
      <Styled.ProfileImgContainer>
        <Styled.ProfileImg src={profileImg} alt="profileImg" />
      </Styled.ProfileImgContainer>
      <Styled.ProfileUserName>{email}</Styled.ProfileUserName>
    </Styled.UserBtn>
  );
}

export default UserBtn;
