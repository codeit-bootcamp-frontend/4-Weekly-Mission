import styled from "styled-components";
import shareImgSrc from "../assets/share.svg";
import penImgSrc from "../assets/pen.svg";
import trashImgSrc from "../assets/trash.svg";

function FolderFunction({ titleName }) {
  return (
    <Container>
      <Title>{titleName}</Title>
      {titleName !== "전체" ? (
        <OptionBox>
          <Option>
            <OptionIcon src={shareImgSrc}></OptionIcon>
            <OptionText>공유</OptionText>
          </Option>
          <Option>
            <OptionIcon src={penImgSrc}></OptionIcon>
            <OptionText>이름 변경</OptionText>
          </Option>
          <Option>
            <OptionIcon src={trashImgSrc}></OptionIcon>
            <OptionText>삭제</OptionText>
          </Option>
        </OptionBox>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;

  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin: 28px auto 20px;
  }
`;

const Title = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const OptionIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const OptionText = styled.span`
  color: #9fa6b2;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default FolderFunction;
