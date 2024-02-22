import { styled } from 'styled-components';
import kebeb from 'assets/images/kebab.svg';
import { useState } from 'react';
import useCloseModal from 'hook/useCloseModal';
import BUTTON from 'utils/constants/BUTTON';

const KebabButton = () => {
  const [showModal, setShowModal] = useState(false);
  useCloseModal(showModal, setShowModal);

  const handleModal = e => {
    e.preventDefault();
    return setShowModal(!showModal);
  };
  return (
    <StyledButton onClick={handleModal}>
      <img src={kebeb} alt="더보기 버튼" />
      {showModal && (
        <StyledModal>
          {BUTTON.KEBAB_OPTION.map(option => (
            <StyledMenu
              key={option}
              onClick={() => {
                // 해당 모달 불러오기
                setShowModal(false);
              }}
            >
              {option}
            </StyledMenu>
          ))}
        </StyledModal>
      )}
    </StyledButton>
  );
};
export default KebabButton;

const StyledButton = styled.button`
  background: transparent;
  width: 2.1rem;
  height: 1.7rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.ul`
  width: 10rem;
  position: absolute;
  left: -7.5rem;
  top: 2rem;
  box-shadow: 0px 2px 8px 0px #3332361a;
  border-radius: 5px;
  z-index: 1;
  background-color: ${({ theme }) => theme.white};
`;
const StyledMenu = styled.li`
  width: 100%;
  padding: 0.7rem 0;
  font-size: 1.4rem;
  &:hover {
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.linkbrary_bg};
    transition: all ease-in-out 200ms;
  }
`;
