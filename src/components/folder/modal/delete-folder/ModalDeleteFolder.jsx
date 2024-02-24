import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import Button from "../Button";

function ModalDeleteFolder({ isDeleteFolder, setIsDeleteFolder, btnColor }) {
  const handleClose = () => setIsDeleteFolder(!isDeleteFolder);
  return (
    <>
      {isDeleteFolder && (
        <StyledBackground onClick={() => handleClose()}>
          <StyledContainer onClick={(e) => e.stopPropagation()}>
            <StyledDiv>
              <CloseButton onClick={() => handleClose()} />
              <Title>폴더 삭제</Title>
              <Button btnColor="red">삭제하기</Button>
            </StyledDiv>
          </StyledContainer>
        </StyledBackground>
      )}
    </>
  );
}

export default ModalDeleteFolder;
