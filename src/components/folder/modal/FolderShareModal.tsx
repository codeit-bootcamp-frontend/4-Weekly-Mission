import { styled } from 'styled-components';

import IconButton from 'components/common/button/IconButton';
import BackdropModal from 'components/common/modal/BackdropModal';
import copyToClipboard from 'utils/copyToClipboard';

import kakaoIcon from 'assets/icon/kakao-icon.svg';
import facebookIcon from 'assets/icon/facebook-icon.svg';
import linkShareIcon from 'assets/icon/linkShare-icon.svg';
import useKakaoShare from 'hooks/useKakaoShare';
import { FacebookShareButton } from 'react-share';

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

  Icon: styled(IconButton)`
    width: 4.2rem;
    height: 4.2rem;
  `,

  ButtonLabel: styled.span`
    font-size: 1.3rem;
    line-height: 1.5rem;
  `,
};

/**
 * FolderShareModal - sns, 링크를 통해 폴더를 공유할 수 있는 버튼이 포함된 '폴더공유' 모달 컴포넌트
 * @param {React.Dispatch.SetStateAction} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param {string} item 공유할 폴더명
 */

interface FolderShareModalProps {
  setOpen: (open: boolean) => void;
  item: string;
}

function FolderShareModal({ setOpen, item }: FolderShareModalProps) {
  const shareLink = `${window.location.origin}/shared/${item}`;

  const { shareKakao } = useKakaoShare(item, shareLink);

  const handleClickLinkShare = () => {
    copyToClipboard(shareLink);
  };

  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Title>폴더 공유</Styled.Title>
      <Styled.Item>{item}</Styled.Item>

      <Styled.ShareBtns>
        <Styled.ShareButton>
          <Styled.Icon icon={kakaoIcon} onClick={shareKakao} style={{ backgroundColor: '#fee500' }} />
          <Styled.ButtonLabel>카카오톡</Styled.ButtonLabel>
        </Styled.ShareButton>

        <Styled.ShareButton>
          <FacebookShareButton url={shareLink}>
            <Styled.Icon icon={facebookIcon} style={{ backgroundColor: '#1877f2' }} />
          </FacebookShareButton>
          <Styled.ButtonLabel>페이스북</Styled.ButtonLabel>
        </Styled.ShareButton>

        <Styled.ShareButton>
          <Styled.Icon icon={linkShareIcon} onClick={handleClickLinkShare} style={{ backgroundColor: '#9D9D9D0A' }} />
          <Styled.ButtonLabel>링크 복사</Styled.ButtonLabel>
        </Styled.ShareButton>
      </Styled.ShareBtns>
    </BackdropModal>
  );
}

export default FolderShareModal;
