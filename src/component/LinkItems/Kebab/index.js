import {
  AddToFolder,
  Container,
  Delete,
  KebabButton,
  KebabMenuBox,
} from "./style";
import kebabImg from "../../../images/kebab.svg";

const Kebab = ({ onClick, kebabOpen }) => {
  return (
    <Container>
      <KebabButton src={kebabImg} onClick={onClick} />
      <KebabMenuBox $kebabopen={kebabOpen.toString()} onClick={onClick}>
        <Delete>삭제하기</Delete>
        <AddToFolder>폴더에 추가</AddToFolder>
      </KebabMenuBox>
    </Container>
  );
};

export default Kebab;
