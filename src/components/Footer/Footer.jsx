import * as S from './Footer.styles';
const Footer = () => {
  return (
    <S.StyledFooter>
      <S.FooterCopyright>©codeit - 2023</S.FooterCopyright>
      <S.FooterLinkSection>
        <S.FooterSiteMapNav>
          <S.FooterSiteMapLink href='/'>Privacy Policy</S.FooterSiteMapLink>
          <S.FooterSiteMapLink href='/'>FAQ</S.FooterSiteMapLink>
        </S.FooterSiteMapNav>
        <S.FooterSnsMapNav>
          <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'>
            <S.FooterSnsMapImage src='/icons/facebook-logo.svg' alt='facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'>
            <S.FooterSnsMapImage src='/icons/twitter-logo.svg' alt='twitter' />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noreferrer noopener'>
            <S.FooterSnsMapImage src='/icons/youtube-logo.svg' alt='youtube' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'>
            <S.FooterSnsMapImage src='/icons/instagram-logo.svg' alt='instagram' />
          </a>
        </S.FooterSnsMapNav>
      </S.FooterLinkSection>
    </S.StyledFooter>
  );
};

export default Footer;
