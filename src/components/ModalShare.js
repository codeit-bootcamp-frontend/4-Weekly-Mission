import shareKaKao from '../assets/icons/share-kakao.svg';
import shareFacebook from '../assets/icons/share-facebook.svg';
import shareLink from '../assets/icons/share-link.svg';
import '../styles/ModalShare.css';

const ModalShare = () => {

  return (
    <div className='modal-share-content'>
      <div className='share-area'>폴더명</div>
      <div className='share-sns'>
        <div className='sns-icon'>
          <a><img src={shareKaKao} /></a>
          <p>카카오톡</p>
        </div>
        <div className='sns-icon'>
          <a><img src={shareFacebook} /></a>
          <p>페이스북</p>
        </div>
        <div className='sns-icon'>
          <a><img src={shareLink} /></a>
          <p>링크 복사</p>
        </div>
      </div>
    </div>
  );
}

export default ModalShare;