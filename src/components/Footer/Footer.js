import * as S from './FooterStyle';
import { LINK_URL } from '../../utils/constants';
import Icon from '../Icon';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import youtubeIcon from '../../assets/youtube.png';
import twitterIcon from '../../assets/twitter.png';

const Icons = [
  {
    src: facebookIcon,
    alt: 'facebook',
    link: LINK_URL.FACEBOOK,
  },
  {
    src: twitterIcon,
    alt: 'twitter',
    link: LINK_URL.TWITTER,
  },
  {
    src: youtubeIcon,
    alt: 'youtube',
    link: LINK_URL.YOUTUBE,
  },
  {
    src: instagramIcon,
    alt: 'instagram',
    link: LINK_URL.INSTAGRAM,
  },
];

const Footer = () => {
  return (
    <S.FooterContianer>
      <S.FooterCompany>©codeit - 2023</S.FooterCompany>
      <S.FooterMenu>
        <S.FooterLink to='/privacy'>Privacy Policy</S.FooterLink>
        <S.FooterLink to='/faq'>FAQ</S.FooterLink>
      </S.FooterMenu>
      <S.FooterIcon>
        {Icons.map((icon) => (
          <Icon
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            link={icon.link}
            className={icon.alt}
          />
        ))}
      </S.FooterIcon>
    </S.FooterContianer>
  );
};

export default Footer;
