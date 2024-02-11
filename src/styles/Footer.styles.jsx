import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p className='copyright'>©codeit - 2023</p>
      <section className='link'>
        <nav className='siteMap'>
          <a href='/'>Privacy Policy</a>
          <a href='/'>FAQ</a>
        </nav>
        <nav className='snsMap'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'>
            <img src='/icons/facebook-logo.svg' alt='facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'>
            <img src='/icons/twitter-logo.svg' alt='twitter' />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noreferrer noopener'>
            <img src='/icons/youtube-logo.svg' alt='youtube' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'>
            <img src='/icons/instagram-logo.svg' alt='instagram' />
          </a>
        </nav>
      </section>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10rem;
  padding: 2rem 6.5rem;
  background: #000000;

  .copyright {
    flex: 0.4;
    color: #676767;
    font-weight: 400;
    font-size: 1rem;
  }

  .link {
    display: flex;
    flex: 0.6;
    justify-content: space-between;
  }

  .siteMap {
    display: flex;
    gap: 2.25rem;
    align-items: flex-start;
  }

  .siteMap a {
    color: #cfcfcf;
    font-weight: 400;
    font-size: 1rem;
    text-decoration-line: none;
  }

  .snsMap {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .snsMap img {
    width: 1.5rem;
  }
`;

export default Footer;
