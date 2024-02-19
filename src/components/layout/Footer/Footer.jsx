import YoutubeIcon from '../../../assets/icons/akar-icons-youtube-fill.svg';
import TwitterIcon from '../../../assets/icons/akar-icons-twitter-fill.svg';
import FacebookIcon from '../../../assets/icons/akar-icons-facebook-fill.svg';
import InstagramIcon from '../../../assets/icons/ant-design-instagram-filled.svg';
import {
  FooterCenter,
  FooterContainer,
  FooterIcon,
  FooterLeft,
  FooterLink,
  FooterRight,
  FooterSocialLink,
} from './footerStyle';

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
  { name: 'YouTube', icon: YoutubeIcon, url: 'https://youtube.com' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>©codeit - 2023</FooterLeft>
      <FooterCenter>
        <FooterLink href="/privacy.html">Privacy Policy</FooterLink>
        <FooterLink href="/faq.html">FAQ</FooterLink>
      </FooterCenter>
      <FooterRight>
        {socialLinks.map(link => (
          <FooterSocialLink
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            <FooterIcon src={link.icon} alt={`${link.name} 아이콘`} />
          </FooterSocialLink>
        ))}
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
