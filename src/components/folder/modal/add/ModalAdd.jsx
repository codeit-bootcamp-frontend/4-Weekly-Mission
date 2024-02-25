import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";

import Button from "../Button";
import AddContainer from "./AddContainer";
import AddDiv from "./AddDiv";
import AddTitleSpan from "./AddTitleSpan";
import AddNumberSpan from "./AddNumberSpan";
import FolderText from "../share/FolderText";
import TitleContainer from "../share/TitleContainer";
import { useState } from "react";

import checkImg from "../../../../assets/img/png/check.png";
import CheckImgContainter from "./CheckImgContainter";
import stopPropagation from "../../../util/stopPropagation";
const ADD_DIV_ITEMS = [
  {
    id: "addDiv_1",
    title: "코딩팁",
    subTitle: "7개 링크",
  },
  {
    id: "addDiv_2",
    title: "채용 사이트",
    subTitle: "12개 링크",
  },
  {
    id: "addDiv_3",
    title: "유용한 글",
    subTitle: "30개 링크",
  },
  {
    id: "addDiv_4",
    title: "나만의 장소",
    subTitle: "3개 링크",
  },
];

function ModalAdd({ handleAddModal }) {
  const [clickedItem, setClickedItem] = useState(null);

  const handleAddDivClick = (id) => {
    setClickedItem(id);
  };

  return (
    <StyledBackground onClick={handleAddModal}>
      <StyledContainer onClick={stopPropagation}>
        <StyledDiv>
          <CloseButton onClick={handleAddModal} />
          <TitleContainer>
            <Title>폴더에 추가</Title>
            <FolderText>링크 주소</FolderText>
          </TitleContainer>
          <AddContainer>
            {ADD_DIV_ITEMS.map(({ id, title, subTitle }) => (
              <AddDiv
                key={id}
                clicked={clickedItem === id}
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
          <Button>추가하기</Button>
        </StyledDiv>
      </StyledContainer>
    </StyledBackground>
  );
}

export default ModalAdd;
