import kakaoIcon from "assests/img/Kakao.png";
import facebookIcon from "assests/img/facebook.png";
import linkIcon from "assests/img/link.png";
import * as S from "./ModalShare.styled";
import ModalCloseBtn from "components/ModalCloseBtn";
import ModalTitle from "components/ModalTitle";
import TargetName from "components/TargetName";
import { ModalDataType } from "typeStore";

interface Props {
  type: ModalDataType;
  dispatch: any;
}
const ModalShare: React.FC<Props> = ({ type, dispatch }) => {
  return (
    <S.Modal $type={type.type}>
      <ModalCloseBtn onClick={() => dispatch({ state: false })} />
      <div>
        <ModalTitle>폴더 공유</ModalTitle>
        <TargetName>{type.folderName}</TargetName>
      </div>
      <S.SharePlatformBox>
        <S.SharePlatform>
          <S.IconWrap $backColor={`rgba(254, 229, 0, 1)`}>
            <S.PlatformImg src={kakaoIcon} />
          </S.IconWrap>
          <S.PlatformName>카카오톡</S.PlatformName>
        </S.SharePlatform>
        <S.SharePlatform>
          <S.IconWrap $backColor={`rgba(24, 119, 242, 1)`}>
            <S.PlatformImg src={facebookIcon} />
          </S.IconWrap>
          <S.PlatformName>페이스북</S.PlatformName>
        </S.SharePlatform>
        <S.SharePlatform>
          <S.IconWrap $backColor={`rgba(157, 157, 157, 0.04)`}>
            <S.PlatformImg src={linkIcon} />
          </S.IconWrap>
          <S.PlatformName>링크 복사</S.PlatformName>
        </S.SharePlatform>
      </S.SharePlatformBox>
    </S.Modal>
  );
};

export default ModalShare;
