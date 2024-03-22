import Link from 'next/link';
import { useRef, useEffect, useMemo } from 'react';
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

interface Props {
  changeViewFooter?: (value: boolean) => void | undefined;
}

const Footer = ({ changeViewFooter }: Props) => {
  const wrapperRef = useRef(null);
  const options = useMemo(
    () => ({
      threshold: 0,
    }),
    [],
  );
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
  useEffect(() => {
    const handleIntersectionObserver = (
      entries: IntersectionObserverEntry[],
    ) => {
      if (changeViewFooter) {
        if (entries[0].isIntersecting) {
          changeViewFooter(true);
        } else {
          changeViewFooter(false);
        }
      }
    };
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [options, changeViewFooter]);
  return (
    <Wrapper ref={wrapperRef}>
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

Footer.defaultProps = {
  changeViewFooter: () => {},
};

export default Footer;
