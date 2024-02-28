import React from 'react';
import * as S from './Modalstyled';
import kakakoIcon from '../../assets/kakao.png';
import facebookIcon from '../../assets/modal-facebook.png';
import modalLinkIcon from '../../assets/modal-link.png';

const ModalShareLink = () => {
  const handleCopyLink = () => {
    const sharedLink = `${window.location.origin}/folder`;
    navigator.clipboard.writeText(sharedLink);
  };

  const shareFacebook = () => {
    window.open('http://www.facebook.com/sharer/sharer.php?u=');
  };

  const links = [
    {
      icon: kakakoIcon,
      name: '카카오톡',
    },
    {
      icon: facebookIcon,
      name: '페이스북',
      onClick: shareFacebook,
    },
    {
      icon: modalLinkIcon,
      name: '링크복사',
      onClick: handleCopyLink,
    },
  ];

  return (
    <S.ModalShareContainer>
      {links.map((link) => (
        <S.ModalShareIconBox
          key={link.name}
          href={link.urlLink}
          target='_blank'
          rel='noopener noreferrer'
          onClick={link.onClick}
        >
          <S.ModalShareIcon src={link.icon} alt={link.name} />
          <S.ModalShareIconName>{link.name}</S.ModalShareIconName>
        </S.ModalShareIconBox>
      ))}
    </S.ModalShareContainer>
  );
};

export default ModalShareLink;
