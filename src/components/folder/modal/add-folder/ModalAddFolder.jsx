import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";
import stopPropagation from "../../../util/stopPropagation";

function ModalAddFolder({ handleAddFolderModal }) {
  return (
    <StyledBackground onClick={handleAddFolderModal}>
      <StyledContainer onClick={stopPropagation}>
        <StyledDiv>
          <CloseButton onClick={handleAddFolderModal} />
          <Title>폴더 추가</Title>
          <Input placeholder="내용 입력" />
          <Button>추가하기</Button>
        </StyledDiv>
      </StyledContainer>
    </StyledBackground>
  );
}

export default ModalAddFolder;
