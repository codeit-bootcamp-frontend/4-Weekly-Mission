import React from 'react';
import ModalKaKaoIcon from '../../assets/modal-kakao.svg';
import ModalFacebookIcon from '../../assets/modal-facebook.svg';
import ModalLinkIcon from '../../assets/modal-link.svg';
import * as Styled from './Modal.styled';
import shareKakaoLink from '../../utils/shareKakaoLink';
import shareFacebookLink from '../../utils/shareFacebookLink';

interface ModalActionType {
  isView?: boolean;
  action: string;
  subTitle?: string;
  url?: string;
}

interface ModalActionProps {
  modalAction: ModalActionType;
}

interface ModalShareListType {
  id: number;
  backgroundColor: string;
  icon: string;
  text: string;
}

const modalShareList: ModalShareListType[] = [
  {
    id: 1,
    backgroundColor: '#FEE500',
    icon: ModalKaKaoIcon,
    text: '카카오톡'
  },
  {
    id: 2,
    backgroundColor: '#1877F2',
    icon: ModalFacebookIcon,
    text: '페이스북'
  },
  {
    id: 3,
    backgroundColor: 'rgba(157, 157, 157, 0.04)',
    icon: ModalLinkIcon,
    text: '링크 복사'
  }
];

function ModalShareList({ modalAction }: ModalActionProps) {
  const handleCopyClipBoard = async (url: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

  const handleListClick = (text: string): void => {
    switch (text) {
      case '링크 복사':
        if (modalAction.url) {
          handleCopyClipBoard(modalAction.url);
        }
        break;

      case '카카오톡':
        shareKakaoLink(modalAction);
        break;

      default: // 페이스북
        if (modalAction.url) {
          shareFacebookLink(modalAction.url);
        }
    }
  };
  return (
    <Styled.ModalShareBox>
      {modalShareList.map((list) => {
        const { id, backgroundColor, icon, text } = list;
        return (
          <li key={id} onClick={() => handleListClick(text)}>
            <Styled.ModalShareIconBox style={{ backgroundColor }}>
              <img src={icon} alt={`폴더 공유 ${text} 아이콘`} />
            </Styled.ModalShareIconBox>
            <Styled.ModalShareText>{text}</Styled.ModalShareText>
          </li>
        );
      })}
    </Styled.ModalShareBox>
  );
}

export default ModalShareList;
