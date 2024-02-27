import React from 'react';
import {
  ModalHeader,
  ModalBody,
  ShareOptionsContainer,
  IconContainer,
  Icon,
  IconLabel,
} from './folderModalStyle';
import kaKaoIcon from '../../../assets/icons/Kakao.svg';
import facebookIcon from '../../../assets/icons/Facebook.svg';
import linkIcon from '../../../assets/icons/link.svg';

const FolderShare = ({ onClose, selectedFolderName, selectedFolderId }) => {
  const hostAddress = window.location.origin;
  const shareLink = `${hostAddress}/shared/${selectedFolderId}`;

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert('링크가 클립보드에 복사되었습니다.');
    } catch (err) {
      alert('링크복사에 실패하였습니다.');
    }
  };

  const shareToSNS = snsName => {
    return () => {
      if (snsName === 'link') {
        copyLinkToClipboard();
      } else {
        alert(`${snsName}로 공유하기: ${shareLink}`);
      }
    };
  };

  const shareOptions = [
    {
      id: 'kakao',
      label: '카카오톡',
      icon: kaKaoIcon,
      action: shareToSNS('카카오톡'),
    },
    {
      id: 'facebook',
      label: '페이스북',
      icon: facebookIcon,
      action: shareToSNS('페이스북'),
    },
    {
      id: 'link',
      label: '링크 복사',
      icon: linkIcon,
      action: shareToSNS('link'),
    },
  ];

  return (
    <>
      <ModalHeader>폴더 공유</ModalHeader>
      <ModalBody>{selectedFolderName}</ModalBody>
      <ShareOptionsContainer>
        {shareOptions.map(option => (
          <IconContainer key={option.id} onClick={option.action}>
            <Icon src={option.icon} alt={option.label} />
            <IconLabel>{option.label}</IconLabel>
          </IconContainer>
        ))}
      </ShareOptionsContainer>
    </>
  );
};

export default FolderShare;
