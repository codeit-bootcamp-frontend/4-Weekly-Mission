import { LANDING_CONTENTS_LIST } from "constnats/list";
import * as S from "./LandingMainStyle";

const LandingMain = () => {
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
