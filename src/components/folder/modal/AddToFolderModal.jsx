import { styled } from 'styled-components';

import BackdropModal from 'components/common/modal/BackdropModal';
import Button from 'components/common/button/Button';
import AddFolderList from 'components/folder/AddFolderList';

const Styled = {
  Title: styled.span`
    font-size: 2rem;
    font-weight: 700;
  `,

  Item: styled.div`
    width: 100%;
    margin: 1rem 0 2.4rem;

    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: center;
    color: ${({ theme }) => theme.color.gray4};
  `,
};

/**
 * AddToFolderModal - 폴더에 링크 추가 작업을 처리하는 모달 컴포넌트
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param {string} item 폴더에 추가할 링크 주소
 */

function AddToFolderModal({ setOpen, item }) {
  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Title>폴더에 추가</Styled.Title>
      <Styled.Item>{item}</Styled.Item>
      <AddFolderList />
      <Button style={{ width: '100%', height: '5.1rem', marginTop: '2.4rem' }}>추가하기</Button>
    </BackdropModal>
  );
}

export default AddToFolderModal;
