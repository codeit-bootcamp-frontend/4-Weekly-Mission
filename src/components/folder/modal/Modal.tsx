import { ModalProps } from "../../../@types/Modal";
import stopPropagation from "../../../util/stopPropagation";
import CloseButton from "./CloseButton";
import StyledBackground from "./StyledBackground";
import StyledContainer from "./StyledContainer";
import StyledDiv from "./StyledDiv";

function Modal({ onModal, children }: ModalProps) {
  return (
    <>
      <StyledBackground onClick={() => onModal()}>
        <StyledContainer onClick={stopPropagation}>
          <StyledDiv>
            <CloseButton onClick={() => onModal()} />
            {children}
          </StyledDiv>
        </StyledContainer>
      </StyledBackground>
    </>
  );
}

export default Modal;
