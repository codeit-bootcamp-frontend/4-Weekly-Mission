import { forwardRef } from "react";
import * as S from "./SelectMenuStyle";

const SelectMenu = forwardRef((props, ref) => {
  return (
    <S.Container ref={ref}>
      <S.Delete>삭제하기</S.Delete>
      <S.Add>폴더에 추가</S.Add>
    </S.Container>
  );
});

export default SelectMenu;
