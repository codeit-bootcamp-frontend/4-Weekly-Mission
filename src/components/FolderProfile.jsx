import styled from "styled-components";

const FolderProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: var(--Linkbrary-bg, #f0f6ff);
  padding-top: 10px;
  padding-bottom: 40px;

  @media ${(props) => props.theme.tabletS} {
    padding-top: 20px;
    padding-bottom: 60px;
  }
`;

const OwnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
    margin: 0px;
  }

  @media ${(props) => props.theme.tabletS} {
    gap: 20px;

    p {
      font-size: 40px;
    }
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  p {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media ${(props) => props.theme.tabletS} {
    gap: 12px;
    img {
      width: 60px;
      height: 60px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default function FolderProfile({ ownerProfile }) {
  return (
    <FolderProfileDiv>
      <OwnerDiv>
        <ProfileDiv>
          <img
            src={ownerProfile?.folder?.owner?.profileImageSource}
            alt="폴더 소유자의 프로필 사진"
          />
          <p>{ownerProfile?.folder?.owner?.name}</p>
        </ProfileDiv>
        <p>{ownerProfile?.folder?.name}</p>
      </OwnerDiv>
    </FolderProfileDiv>
  );
}
