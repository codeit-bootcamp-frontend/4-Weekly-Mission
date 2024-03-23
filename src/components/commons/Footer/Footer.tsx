import Link from 'next/link';
import * as S from './Footer.style';

const Footer = () => {
  const SNS = [
    {
      src: '/images/facebook.svg',
      alt: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      src: '/images/twitter.svg',
      alt: 'twitter',
      href: 'https://twitter.com',
    },
    {
      src: '/images/youtube.svg',
      alt: 'youtube',
      href: 'https://www.youtube.com',
    },
    {
      src: '/images/instagram.svg',
      alt: 'instagram',
      href: 'https://www.instagram.com',
    },
  ];
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.FlexWrapper>
          <S.CopyLightWrapper>©codeit - 2023</S.CopyLightWrapper>
          <S.PFWrapper>
            <Link href="/privacy">
              <S.PolicyWrapper>Privacy Policy</S.PolicyWrapper>
            </Link>
            <Link href="/faq">
              <S.FAQWrapper>FAQ</S.FAQWrapper>
            </Link>
          </S.PFWrapper>
          <S.SNSWrapper>
            {SNS.map((sns) => (
              <Link href={sns.href} key={sns.alt}>
                <S.SNSIcon src={sns.src} alt={sns.alt} width={20} height={20} />
              </Link>
            ))}
          </S.SNSWrapper>
        </S.FlexWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

Footer.defaultProps = {
  changeFooterHeight: () => {},
};

export default Footer;
