import {
  LANDING_LINK,
  LANDING_MANAGE,
  LANDING_SEARCH,
  LANDING_SHARE,
} from "../../../constnats/image";
import * as S from "./LandingMainStyle";

const LandingMain = () => {
  const LANDING_CONTENTS_LIST = [
    {
      title: () => (
        <>
          <S.LinkGradient>원하는 링크</S.LinkGradient>를 저장하세요
        </>
      ),
      text: () => (
        <>
          "나중에 읽고 싶은 글, 다시 보고 싶은 영상,
          <S.TabletBr /> 사고 싶은 옷,
          <S.MobileBr /> 기억하고 싶은 모든 것을
          <S.TabletBr /> 한 공간에 저장하세요."
        </>
      ),
      image: LANDING_LINK,
      alt: "link",
    },
    {
      title: () => (
        <>
          링크를 폴더로
          <S.ManageGradient> 관리</S.ManageGradient>하세요
        </>
      ),
      text: () => (
        <>
          "나만의 폴더를 무제한으로 만들고 <S.TabletBr /> 다양하게 활용할 수
          <S.MobileBr />
          있습니다"
        </>
      ),
      image: LANDING_MANAGE,
      alt: "manage",
    },
    {
      title: () => (
        <>
          저장한 링크를
          <S.ShareGradient> 공유</S.ShareGradient>해보세요
        </>
      ),
      text: () => (
        <>
          "여러 링크를 폴더에 담고 공유할 수 있습니다.
          <S.TabletBr /> 가족,
          <S.MobileBr /> 친구, 동료들에게 쉽고 빠르게 링크를
          <S.TabletBr /> 공유해 보세요."
        </>
      ),
      image: LANDING_SHARE,
      alt: "share",
    },
    {
      title: () => (
        <>
          저장한 링크를 <S.SearchGradient>검색</S.SearchGradient>해 보세요
        </>
      ),
      text: () => <>"중요한 정보들을 검색으로 쉽게 찾아보세요"</>,
      image: LANDING_SEARCH,
      alt: "search",
    },
  ];

  return (
    <S.Container>
      {LANDING_CONTENTS_LIST &&
        LANDING_CONTENTS_LIST.map((content, index) => (
          <S.Section key={content.alt}>
            <S.Title $isEven={index % 2 === 0}>{content.title()}</S.Title>
            <S.Text $isEven={index % 2 === 0}>{content.text()}</S.Text>
            <S.Image
              src={content.image}
              alt={content.alt}
              $isEven={index % 2 === 0}
            />
          </S.Section>
        ))}
    </S.Container>
  );
};

export default LandingMain;
