import Button from "../../Button/Button";
import { LINK_ICON } from "../../../../constnats/image";
import { ADD_LINK_PLACEHOLDER } from "../../../../constnats/constant";
import * as S from "./AddLinkStyle";

const AddLink = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Image src={LINK_ICON} alt="add" />
        <S.Input placeholder={ADD_LINK_PLACEHOLDER} />
      </S.Box>
      <Button>추가하기</Button>
    </S.Container>
  );
};

export default AddLink;
