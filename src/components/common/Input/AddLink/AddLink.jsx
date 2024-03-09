import Button from "../../Button/Button";
import { LINK_ICON } from "../../../../constnats/image";
import * as S from "./AddLinkStyle";

const AddLink = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Image src={LINK_ICON} alt="add" />
        <S.Input placeholder="링크를 추가해 보세요" />
      </S.Box>
      <Button>추가하기</Button>
    </S.Container>
  );
};

export default AddLink;
