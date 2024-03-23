import { styled } from 'styled-components';

import closeIcon from 'assets/icon/close-icon.svg';
import Portal from 'components/common/modal/Portal';
import IconButton from 'components/common/button/IconButton';
import { Children } from 'interfaces/componentsInterface';

const Styled = {
  Backdrop: styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  `,

  Container: styled.div`
    min-width: 36rem;
    min-height: 19rem;
    padding: 3.2rem 4rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 1.5rem;
    border: 1px solid #dee2e6;
    background-color: ${({ theme }) => theme.color.white};
  `,

  CloseButton: styled(IconButton)`
    width: 2.4rem;
    height: 2.4rem;

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: #e7effb;
  `,
};

/**
 * BackdropModal - 배경이 반투명인 모달창
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param {React.ReactNode} children 모달창 내부 컴포넌트 및 엘리먼트
 */

interface BackdropModalProps extends Children {
  setOpen: (open: boolean) => void;
}

function BackdropModal({ setOpen, children }: BackdropModalProps) {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Portal>
      <Styled.Backdrop>
        <Styled.Container>
          <Styled.CloseButton onClick={closeModal} icon={closeIcon} />
          {children}
        </Styled.Container>
      </Styled.Backdrop>
    </Portal>
  );
}

export default BackdropModal;
