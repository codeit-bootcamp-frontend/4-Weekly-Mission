import facebookIcon from '../../../assets/facebook.svg';
import instagramIcon from '../../../assets/instagram.svg';
import twitterIcon from '../../../assets/twitter.svg';
import youtubeIcon from '../../../assets/youtube.svg';

const ICON = {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
};

const SnsItem = ({ name, address }) => {
  const target = /^http/.test(address) ? '_blank' : '_self';
  const rel = target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <li>
      <a href={address} target={target} rel={rel} className="item">
        {ICON[`${name}Icon`] ? <img src={ICON[`${name}Icon`]} alt={name} /> : `${name}`}
      </a>
    </li>
  );
};

export default SnsItem;
