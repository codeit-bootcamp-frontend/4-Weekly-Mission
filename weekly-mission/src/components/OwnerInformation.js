
import styled from "styled-components";

const OwnerCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CardInner = styled.div`
  text-align: center;
`;

const ImgBox = styled.div`
  width: 6rem;
  height: 6rem;
  margin: auto;
  & > img {
    width: 100%;
    border-radius: 50%;
  }
`;

const CardName = styled.span`
  font-size: 1.2rem;
  line-height: 150%;
  margin-top: 1.2rem;
  display: inline-flex;
`;

const FolderName = styled.strong`
  font-size: 3rem;
  color: #000;
  text-align: center;
  line-height: 1;
`;

function OwnerInformation({ information }) {
  const { name, owner } = information;

  return (
    <OwnerCard>
      <CardInner>
        <ImgBox>
          <img src={owner.profileImageSource} alt="폴더소유자 프로필 이미지" />
        </ImgBox>
        <CardName>@{owner.name}</CardName>
      </CardInner>
      <FolderName>{name}</FolderName>
    </OwnerCard>
  );
}

export default OwnerInformation;

