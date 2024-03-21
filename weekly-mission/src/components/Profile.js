
import styled from "styled-components";

const ProfileBlock = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  .Profile-img {
    width: 2.8rem;
    height: 2.8rem;
  }

  .Profile-img > img {
    width: 100%;
    border-radius: 50%;
  }

  .Profile-email {
    font-size: 1.4rem;
    color: #373740;
    line-height: 1;
  }

  @media (max-width: 790px) {
    .Profile-email {
      display: none;
    }
  }
`;

function Profile({ userData }) {
  return (
    <ProfileBlock>
      <div className="Profile-img">
        <img src={userData.profileImageSource} alt="프로필사진" />
      </div>
      <p className="Profile-email">{userData.email}</p>
    </ProfileBlock>
  );
}

export default Profile;

