import styled from "styled-components";
import share from "../../assets/icons/share.svg";
import pen from "../../assets/icons/pen.svg";
import trash from "../../assets/icons/trash.svg";

const FolderTitle = ({ titleName, setIsModal }) => {
  return (
    <Container>
      <Title>{titleName}</Title>
      {titleName !== "전체" && (
        <OptionBox>
          <Option
            onClick={() => {
              setIsModal("공유");
            }}
          >
            <OptionIcon src={share}></OptionIcon>
            <OptionText>공유</OptionText>
          </Option>
          <Option
            onClick={() => {
              setIsModal("이름 변경");
            }}
          >
            <OptionIcon src={pen}></OptionIcon>
            <OptionText>이름 변경</OptionText>
          </Option>
          <Option
            onClick={() => {
              setIsModal("삭제");
            }}
          >
            <OptionIcon src={trash}></OptionIcon>
            <OptionText>삭제</OptionText>
          </Option>
        </OptionBox>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
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

  &:hover {
    cursor: pointer;
  }
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

export default FolderTitle;
