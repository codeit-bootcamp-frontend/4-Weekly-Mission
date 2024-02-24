import { styled } from 'styled-components';

import IconButton from 'components/common/button/IconButton';
import BackdropModal from 'components/common/modal/BackdropModal';
import copyToClipboard from 'utils/copyToClipboard';

import kakaoIcon from 'assets/icon/kakao-icon.svg';
import facebookIcon from 'assets/icon/facebook-icon.svg';
import linkShareIcon from 'assets/icon/linkShare-icon.svg';

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

  ShareBtns: styled.div`
    display: flex;
    justify-content: center;
    gap: 3.2rem;
  `,

  ShareButton: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `,

  ButtonLabel: styled.span`
    font-size: 1.3rem;
    line-height: 1.5rem;
  `,
};

const shareButtons = [
  {
    icon: kakaoIcon,
    backgroundColor: '#FEE500',
    label: '카카오톡',
    func: () => {
      console.log('함수실행');
    },
  },
  {
    icon: facebookIcon,
    backgroundColor: '#1877F2',
    label: '페이스북',
    func: () => {
      console.log('함수실행');
    },
  },
  {
    icon: linkShareIcon,
    backgroundColor: '#9D9D9D0A',
    label: '링크 복사',
    func: (link) => {
      copyToClipboard(link);
    },
  },
];

/**
 * FolderShareModal - sns, 링크를 통해 폴더를 공유할 수 있는 버튼이 포함된 '폴더공유' 모달 컴포넌트
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param {string} item 공유할 폴더명
 */

function FolderShareModal({ setOpen, item }) {
  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Title>폴더 공유</Styled.Title>
      <Styled.Item>{item}</Styled.Item>
      <Styled.ShareBtns>
        {shareButtons.map((button, idx) => (
          <Styled.ShareButton key={idx} onClick={() => button.func(item)}>
            <IconButton
              icon={button.icon}
              style={{ width: '4.2rem', height: '4.2rem', backgroundColor: button.backgroundColor }}
            />
            <Styled.ButtonLabel>{button.label}</Styled.ButtonLabel>
          </Styled.ShareButton>
        ))}
      </Styled.ShareBtns>
    </BackdropModal>
  );
}

export default FolderShareModal;
