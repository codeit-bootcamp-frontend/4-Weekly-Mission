import { styled } from 'styled-components';

import faceboock from 'assets/icon/facebook-icon.png';
import twitter from 'assets/icon/twitter-icon.png';
import youtube from 'assets/icon/youtube-icon.png';
import instagram from 'assets/icon/instagram-icon.png';

const Styled = {
  Container: styled.div`
    color: white;
    display: flex;
    gap: 1.2rem;
  `,
  Icon: styled.a`
    width: 2rem;
    height: 2rem;
  `,
};

function SocialMediaBtns() {
  return (
    <Styled.Container>
      <Styled.Icon href="https://www.facebook.com/" target="_blank">
        <img src={faceboock} alt="페이스북" />
      </Styled.Icon>
      <Styled.Icon href="https://twitter.com/" target="_blank">
        <img src={twitter} alt="트위터" />
      </Styled.Icon>
      <Styled.Icon href="https://www.youtube.com/" target="_blank">
        <img src={youtube} alt="유투브" />
      </Styled.Icon>
      <Styled.Icon href="https://www.instagram.com/" target="_blank">
        <img src={instagram} alt="인스타그램" />
      </Styled.Icon>
    </Styled.Container>
  );
}

export default SocialMediaBtns;
