import addIcon from 'assets/icon/add-icon.svg';
import { styled } from 'styled-components';

const Styled = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  `,

  Label: styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.primary};
    white-space: nowrap;
  `,

  Icon: styled.img`
    width: 1.6rem;
    height: 1.6rem;
  `,
};

function AddFolderButton() {
  return (
    <Styled.Button>
      <Styled.Label>폴더추가</Styled.Label>
      <Styled.Icon src={addIcon} alt="폴더추가 버튼" />
    </Styled.Button>
  );
}

export default AddFolderButton;
