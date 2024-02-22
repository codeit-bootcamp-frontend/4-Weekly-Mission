import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import Input from "../Input";
import Button from "../Button";

function ModalEdit({ isEditFolder, setIsEditFolder }) {
  const handleClose = () => setIsEditFolder(!isEditFolder);
  return (
    <>
      {isEditFolder && (
        <StyledBackground onClick={() => handleClose()}>
          <StyledContainer onClick={(e) => e.stopPropagation()}>
            <StyledDiv>
              <CloseButton onClick={() => handleClose()} />
              <Title>폴더 이름 변경</Title>
              <Input placeholder="유용한 팁" />
              <Button>추가하기</Button>
            </StyledDiv>
          </StyledContainer>
        </StyledBackground>
      )}
    </>
  );
}

export default ModalEdit;
