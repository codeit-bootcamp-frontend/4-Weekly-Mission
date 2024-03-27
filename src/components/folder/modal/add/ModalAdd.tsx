import Title from "../Title";
import Button from "../Button";
import AddContainer from "./AddContainer";
import AddDiv from "./AddDiv";
import AddTitleSpan from "./AddTitleSpan";
import AddNumberSpan from "./AddNumberSpan";
import FolderText from "../share/FolderText";
import TitleContainer from "../share/TitleContainer";
import { useState } from "react";
import uuid from "react-uuid";
import checkImg from "../../../../assets/img/png/check.png";
import CheckImgContainter from "./CheckImgContainter";
const ADD_DIV_ITEMS = [
  {
    id: uuid(),
    title: "코딩팁",
    subTitle: "7개 링크",
  },
  {
    id: uuid(),
    title: "채용 사이트",
    subTitle: "12개 링크",
  },
  {
    id: uuid(),
    title: "유용한 글",
    subTitle: "30개 링크",
  },
  {
    id: uuid(),
    title: "나만의 장소",
    subTitle: "3개 링크",
  },
];

function ModalAdd() {
  //refactor: number 타입으로 나중에 다시 api를 통해 받아야할 것으로 보임. 현재는 임시 데이터라 ADD_DIV_ITEMS에 uuid 적용
  const [clickedItem, setClickedItem] = useState<string>("");

  const handleAddDivClick = (id: string) => {
    setClickedItem(id);
  };

  return (
    <>
      <TitleContainer>
        <Title>폴더에 추가</Title>
        <FolderText>링크 주소</FolderText>
      </TitleContainer>
      <AddContainer>
        {ADD_DIV_ITEMS.map(({ id, title, subTitle }) => (
          <AddDiv
            key={id}
            $clicked={clickedItem === id}
            onClick={() => handleAddDivClick(id)}
          >
            <AddTitleSpan>{title}</AddTitleSpan>
            <AddNumberSpan>{subTitle}</AddNumberSpan>
            {clickedItem === id && (
              <CheckImgContainter>
                <img src={checkImg} alt="checked" />
              </CheckImgContainter>
            )}
          </AddDiv>
        ))}
      </AddContainer>
      <Button $btnColor="blue">추가하기</Button>
    </>
  );
}

export default ModalAdd;
