import {
  LANDING_LINK,
  LANDING_MANAGE,
  LANDING_SEARCH,
  LANDING_SHARE,
} from "../../../constnats/image";
import * as S from "./LandingMainStyle";

const LandingMain = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Box>
          <S.Title>
            <S.Gradient>원하는 링크</S.Gradient>를 저장하세요
          </S.Title>
          <S.Text>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 한 공간에 저장하세요.
          </S.Text>
        </S.Box>
        <S.Image src={LANDING_LINK} alt="main" />
      </S.Section>
      <S.Section>
        <S.Box>
          <S.Title>
            링크를 폴더로
            <S.Gradient>관리</S.Gradient>하세요
          </S.Title>
          <S.Text>
            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다
          </S.Text>
        </S.Box>
        <S.Image src={LANDING_MANAGE} alt="main" />
      </S.Section>
      <S.Section>
        <S.Box>
          <S.Title>
            저장한 링크를
            <S.Gradient>공유</S.Gradient>해 보세요.
          </S.Title>
          <S.Text>
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </S.Text>
        </S.Box>
        <S.Image src={LANDING_SHARE} alt="main" />
      </S.Section>
      <S.Section>
        <S.Box>
          <S.Title>
            저장한 링크를 <S.Gradient>검색</S.Gradient>해 보세요
          </S.Title>
          <S.Text>중요한 정보들을 검색으로 쉽게 찾아보세요</S.Text>
        </S.Box>
        <S.Image src={LANDING_SEARCH} alt="main" />
      </S.Section>
    </S.Container>
  );
};

export default LandingMain;
