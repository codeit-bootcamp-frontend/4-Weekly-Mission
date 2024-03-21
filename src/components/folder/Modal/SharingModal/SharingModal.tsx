import {
  ButtonWrapper,
  Icon,
  IconName,
  IconWrapper,
  Wrapper,
} from './SharingModal.style';

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
    <Wrapper>
      {BUTTON.map((button, index) => (
        <ButtonWrapper key={index}>
          <IconWrapper $color={button.color}>
            <Icon src={button.src} alt={button.name} width={18} height={18} />
          </IconWrapper>
          <IconName>{button.name}</IconName>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

export default SharingModal;
