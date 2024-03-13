import kakaoLogo from '../../assets/svg/kakao.svg';
import facebookLogo from '../../assets/svg/facebook.svg';
import linkLogo from '../../assets/svg/link.svg';

import './ModalShareIconsBox.css'

const SOCIAL_MEDIA_LINKS = Object.freeze([
  { name: '카카오톡', src: kakaoLogo, alt: 'kakao icon'},
  { name: '페이스북', src: facebookLogo, alt: 'facebook icon'},
  { name: '링크 복사', src: linkLogo, alt: 'link icon'}
]);

const ModalShareIconsBox = () => {
  return (
    <ul className='shareIconContainer'>
      {SOCIAL_MEDIA_LINKS.map(({name, src, alt}) => (
        <li key={name} className='shareIcon'>
          <img src={src} alt={alt}/>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  )
}

export default ModalShareIconsBox