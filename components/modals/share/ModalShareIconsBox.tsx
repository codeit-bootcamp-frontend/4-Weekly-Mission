import Image from 'next/image';

import kakaoLogo from '@/public/svg/kakao.svg';
import facebookLogo from '@/public/svg/facebook.svg';
import linkLogo from '@/public/svg/link.svg';

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
          <Image src={src} alt={alt}/>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  )
}

export default ModalShareIconsBox