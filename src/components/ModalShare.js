import styles from '../styles/ModalShare.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useLocation } from 'react-router-dom';

import shareKaKao from '../assets/icons/share-kakao.svg';
import shareFacebook from '../assets/icons/share-facebook.svg';
import shareLink from '../assets/icons/share-link.svg';

const ModalShare = ({ subTitle }) => {
  const location = useLocation();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={cn('modal-share-content')}>
      <div className={cn('share-area')}>{subTitle}</div>
      <div className={cn('share-sns')}>
        <div className={cn('sns-icon')}>
          <a><img src={shareKaKao} /></a>
          <p>카카오톡</p>
        </div>
        <div className={cn('sns-icon')}>
          <a><img src={shareFacebook} /></a>
          <p>페이스북</p>
        </div>
        <div className={cn('sns-icon')}>
          <a onClick={() => handleCopyClipBoard(`https://linklibrary313.netlify.app${location.pathname}`)}><img src={shareLink} /></a>
          <p>링크 복사</p>
        </div>
      </div>
    </div>
  );
};

export default ModalShare;