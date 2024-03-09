import { ADD_FOLDER_ICON } from "../../../constnats/image";
import * as S from "./ActionButtonStyle";

const ActionButton = () => {
  return (
    <S.Container>
      <S.Title>폴더에추가</S.Title>
      <S.Image src={ADD_FOLDER_ICON} alt="add" />
    </S.Container>
  );
};

export default ActionButton;
