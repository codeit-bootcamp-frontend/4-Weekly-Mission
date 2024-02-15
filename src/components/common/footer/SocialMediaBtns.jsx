import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import faceboockIcon from 'assets/icon/facebook-icon.svg';
import twitterIcon from 'assets/icon/twitter-icon.svg';
import youtubeIcon from 'assets/icon/youtube-icon.svg';
import instagramIcon from 'assets/icon/instagram-icon.svg';

const Styled = {
  Container: styled.div`
    color: white;
    display: flex;
    gap: 1.2rem;
  `,

  Icon: styled(Link)`
    width: 2rem;
    height: 2rem;
  `,
};

const socialMediaData = [
  { name: 'Facebook', url: 'https://www.facebook.com/', icon: faceboockIcon },
  { name: 'Twitter', url: 'https://twitter.com/', icon: twitterIcon },
  { name: 'Youtube', url: 'https://www.youtube.com/', icon: youtubeIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/', icon: instagramIcon },
];

function SocialMediaBtns({ ...htmlDivProps }) {
  return (
    <Styled.Container {...htmlDivProps}>
      {socialMediaData.map(({ name, url, icon }, idx) => (
        <Styled.Icon key={idx} to={url} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={name} />
        </Styled.Icon>
      ))}
    </Styled.Container>
  );
}

export default SocialMediaBtns;
