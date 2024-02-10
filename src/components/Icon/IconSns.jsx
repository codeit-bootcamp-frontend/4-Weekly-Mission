import facebookImg from '../../assets/icon_facebook.svg';
import instagramImg from '../../assets/icon_instagram.svg';
import twitterImg from '../../assets/icon_twitter.svg';
import youtubeImg from '../../assets/icon_youtube.svg';

const IMAGES = {
  facebook: facebookImg,
  instagram: instagramImg,
  twitter: twitterImg,
  youtube: youtubeImg,
};

const INITIAL_VALUE = 'facebook';

function IconSns({ value = INITIAL_VALUE, width = 20, height = 20 }) {
  const src = IMAGES[value] || IMAGES.facebook;
  const alt = IMAGES[value] ? value : INITIAL_VALUE;
  return <img src={src} width={width} height={height} alt={alt} />;
}

export default IconSns;
