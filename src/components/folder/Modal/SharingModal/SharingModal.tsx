import * as S from './SharingModal.style';

const SharingModal = () => {
  const BUTTON = [
    { name: '카카오톡', src: '/images/kakaoShare.svg', color: '#FEE500' },
    { name: '페이스북', src: '/images/facebookShare.svg', color: '#1877F2' },
    {
      name: '링크 복사',
      src: '/images/link.svg',
      color: 'rgba(157, 157, 157, 0.04)',
    },
  ];
  return (
    <S.Wrapper>
      {BUTTON.map((button) => (
        <S.ButtonWrapper key={button.name}>
          <S.IconWrapper $color={button.color}>
            <S.Icon src={button.src} alt={button.name} width={18} height={18} />
          </S.IconWrapper>
          <S.IconName>{button.name}</S.IconName>
        </S.ButtonWrapper>
      ))}
    </S.Wrapper>
  );
};

export default SharingModal;
