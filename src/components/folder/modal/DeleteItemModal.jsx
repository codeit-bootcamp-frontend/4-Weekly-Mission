import { styled } from 'styled-components';

import Button from 'components/common/button/Button';
import BackdropModal from 'components/common/modal/BackdropModal';

import BUTTON_TYPE from 'constants/BUTTON_TYPE';

const Styled = {
  Title: styled.span`
    font-size: 2rem;
    font-weight: 700;
  `,

  Item: styled.div`
    width: 100%;
    margin: 1rem 0 2.4rem;

    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.gray4};
  `,
};

/**
 * DeleteItemModal - 삭제버튼이 포함된 공통 모달 컴포넌트(폴더/링크 삭제)
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param  {function} onClick 삭제하기 버튼 클릭 시 호출되는 함수
 * @param {string} modalTitle 모달 타이틀
 * @param {string} item 삭제 대상이 되는 아이템(폴더 or 링크)
 */

function DeleteItemModal({ setOpen, onClick, modalTitle, item }) {
  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Title>{modalTitle}</Styled.Title>
      <Styled.Item>{item}</Styled.Item>
      <Button
        type="button"
        onClick={onClick}
        styleType={BUTTON_TYPE.DELETE}
        style={{ height: '5.1rem', width: '100%' }}
      >
        삭제하기
      </Button>
    </BackdropModal>
  );
}

export default DeleteItemModal;
