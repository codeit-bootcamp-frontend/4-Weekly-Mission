import { useState } from 'react';
import { styled } from 'styled-components';

import addIcon from 'assets/icon/add-icon.svg';
import InputFormModal from 'components/folder/modal/InputFormModal';

const Styled = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 767px) {
      display: none;
    }
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (folderName: string) => {
    console.log(`${folderName} 추가완료!`);
  };

  return (
    <>
      <Styled.Button type="button" onClick={handleButtonClick}>
        <Styled.Label>폴더추가</Styled.Label>
        <Styled.Icon src={addIcon} alt="폴더추가 버튼" />
      </Styled.Button>
      {isModalOpen && (
        <InputFormModal
          setOpen={setIsModalOpen}
          onSubmit={handleFormSubmit}
          modalTitle="폴더 추가"
          buttonLabel="추가하기"
        />
      )}
    </>
  );
}

export default AddFolderButton;
