import * as S from "./LandingMainStyle";
import { LANDING_CONTENT_LIST } from "../../../constnats/lists";

const LandingMain = () => {
  return (
    <S.Container>
      {LANDING_CONTENT_LIST &&
        LANDING_CONTENT_LIST.map((item) => (
          <S.Section key={item.alt}>
            <S.Box>
              <S.Title>{item.title()}</S.Title>
              <S.Text>{item.text}</S.Text>
            </S.Box>
            <S.Image src={item.image} alt={item.alt} />
          </S.Section>
        ))}
    </S.Container>
  );
};

export default LandingMain;
