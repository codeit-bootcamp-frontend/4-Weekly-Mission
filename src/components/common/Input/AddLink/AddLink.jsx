import Button from "../../Button/Button";
import { LINK_ICON } from "../../../../constnats/image";
import * as S from "./AddLinkStyle";

const AddLink = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Image src={LINK_ICON} alt="add" />
        <S.Input />
      </S.Box>
      <Button>추가하기</Button>
    </S.Container>
  );
};

export default AddLink;
