import { useRef, useState } from 'react';
import { styled } from 'styled-components';

import useOutSideClick from 'hooks/useOutSideClick';
import meatballIcon from 'assets/icon/meatballsIcon.svg';
import BUTTON_TYPE from 'constants/BUTTON_TYPE';
import DeleteItemModal from 'components/folder/modal/DeleteItemModal';
import AddToFolderModal from 'components/folder/modal/AddToFolderModal';

const Styled = {
  Container: styled.button`
    width: 2.1rem;
    height: 1.7rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Popover: styled.ul`
    width: 10rem;
    position: absolute;
    left: -7.5rem;
    top: 2rem;
    box-shadow: 0px 2px 8px 0px #3332361a;
    z-index: 1;

    background-color: ${({ theme }) => theme.color.white};
  `,

  Option: styled.li`
    width: 100%;
    padding: 0.7rem 0;
    font-size: 1.4rem;

    &:hover {
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.gray2};
      transition: all ease-in-out 200ms;
    }
  `,
};

/**
 * 미트볼(...) 모양의 버튼 컴포넌트 -> 클릭 시 드롭다운 메뉴를 보여줌
 */

function MeatBallButton() {
  const meatBallBtnRef = useRef<HTMLButtonElement>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useOutSideClick(meatBallBtnRef, () => setIsPopoverOpen(false));

  const handleClickOption = (option: string) => {
    option === '삭제하기' ? setIsDeleteModalOpen(true) : setIsAddModalOpen(true);
  };

  return (
    <>
      <Styled.Container
        ref={meatBallBtnRef}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIsPopoverOpen(true);
        }}
      >
        <img src={meatballIcon} alt="더보기 버튼" />

        {isPopoverOpen && (
          <Styled.Popover>
            {BUTTON_TYPE.MEATBALL_OPTION.map((option) => (
              <Styled.Option
                key={option}
                onClick={() => {
                  handleClickOption(option);
                }}
              >
                {option}
              </Styled.Option>
            ))}
          </Styled.Popover>
        )}
      </Styled.Container>
      {isDeleteModalOpen && (
        <DeleteItemModal setOpen={setIsDeleteModalOpen} modalTitle="링크 삭제" item="삭제할 아이템" />
      )}
      {isAddModalOpen && (
        <AddToFolderModal
          setOpen={setIsAddModalOpen}
          onModalClose={() => setIsAddModalOpen(false)}
          item="추가할 아이템"
        />
      )}
    </>
  );
}

export default MeatBallButton;
