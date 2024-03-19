import Link from 'next/link';
import {
  ContentWrapper,
  CopyLightWrapper,
  FAQWrapper,
  FlexWrapper,
  PFWrapper,
  PolicyWrapper,
  SNSIcon,
  SNSWrapper,
  Wrapper,
} from './Footer.style';

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
    <Wrapper>
      <ContentWrapper>
        <FlexWrapper>
          <CopyLightWrapper>©codeit - 2023</CopyLightWrapper>
          <PFWrapper>
            <Link href="/privacy">
              <PolicyWrapper>Privacy Policy</PolicyWrapper>
            </Link>
            <Link href="/faq">
              <FAQWrapper>FAQ</FAQWrapper>
            </Link>
          </PFWrapper>
          <SNSWrapper>
            {SNS.map((sns, index) => (
              <Link href={sns.href} key={index}>
                <SNSIcon src={sns.src} alt={sns.alt} width={20} height={20} />
              </Link>
            ))}
          </SNSWrapper>
        </FlexWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
