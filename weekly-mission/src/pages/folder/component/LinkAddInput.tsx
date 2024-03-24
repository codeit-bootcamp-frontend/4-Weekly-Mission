import linkIcon from "assests/img/link.png";
import { useState } from "react";
import * as S from "./LinkAddInput.styled";

interface Props {
  dispatch: any;
}

const LinkAddInput: React.FC<Props> = ({ dispatch }) => {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <S.LinkAddBox>
      <S.Wrap>
        <img src={linkIcon} alt="링크 아이콘" />
        <S.Form>
          <S.LinkInput
            value={userInput}
            type="text"
            placeholder="링크를 추가해 보세요"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </S.Form>
        <S.AddBtn
          type="button"
          onClick={() => {
            dispatch({ state: true, type: "AddAtFolder", url: userInput });
          }}
        >
          추가하기
        </S.AddBtn>
      </S.Wrap>
    </S.LinkAddBox>
  );
};

export default LinkAddInput;
