import * as S from "./LandingMainStyle";
import { LANDING_CONTENT_LIST } from "../../../constnats/lists";

const LandingMain = () => {
  return (
    <S.Container>
      {LANDING_CONTENT_LIST &&
        LANDING_CONTENT_LIST.map((item, index) => (
          <S.Section key={item.alt}>
            <S.Title isEven={index % 2 === 0}>{item.title()}</S.Title>
            <S.Text isEven={index % 2 === 0}>{item.text}</S.Text>
            <S.Image src={item.image} alt={item.alt} isEven={index % 2 === 0} />
          </S.Section>
        ))}
    </S.Container>
  );
};

export default LandingMain;
