import { useRef, useState } from 'react';
import { styled } from 'styled-components';

import useOutSideClick from 'hooks/useOutSideClick';
import meatballIcon from 'assets/icon/meatballsIcon.svg';
import BUTTON_TYPE from 'constants/BUTTON_TYPE';

const Styled = {
  Container: styled.button`
    width: 2.1rem;
    height: 1.7rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Modal: styled.ul`
    width: 10rem;
    position: absolute;
    left: -7.5rem;
    top: 2rem;
    box-shadow: rgba(51, 50, 54, 0.1);
    z-index: 1;

    background-color: ${({ theme }) => theme.color.white};
  `,

  Menu: styled.li`
    width: 100%;
    padding: 0.7rem 0;
    font-size: 1.4rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.gray2};
      transition: all ease-in-out 200ms;
    }
  `,
};

/**
 * 미트볼(...) 모양의 버튼 컴포넌트 -> 클릭 시 드롭다운 메뉴를 보여줌
 */

function MeatBallButton() {
  const meatBallBtnRef = useRef();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  useOutSideClick(meatBallBtnRef, () => setIsMenuModalOpen(false));

  return (
    <Styled.Container
      ref={meatBallBtnRef}
      type="button"
      onClick={() => {
        return setIsMenuModalOpen(true);
      }}
    >
      <img src={meatballIcon} alt="더보기 버튼" />

      {isMenuModalOpen && (
        <Styled.Modal>
          {BUTTON_TYPE.MEATBALL_OPTION.map((option) => (
            <Styled.Menu
              key={option}
              onClick={() => {
                // 각각 클릭 시 어떤 동작할지 생각해서 요부분 분리 필요
                setIsMenuModalOpen(false);
              }}
            >
              {option}
            </Styled.Menu>
          ))}
        </Styled.Modal>
      )}
    </Styled.Container>
  );
}

export default MeatBallButton;
