import { OwnerDataType } from "typeStore";
import * as S from "./OwnerInformation.styled";

interface OwnerProps {
  information: OwnerDataType;
}

const OwnerInformation: React.FC<OwnerProps> = ({ information }) => {
  const { name, owner } = information;

  return (
    <S.OwnerCard>
      <S.CardInner>
        <S.ImgBox>
          <S.OwnerImg
            src={owner.profileImageSource}
            alt="폴더소유자 프로필 이미지"
          />
        </S.ImgBox>
        <S.CardName>@{owner.name}</S.CardName>
      </S.CardInner>
      <S.FolderName>{name}</S.FolderName>
    </S.OwnerCard>
  );
};

export default OwnerInformation;
