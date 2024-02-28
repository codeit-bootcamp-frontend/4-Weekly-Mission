import shareKaKao from '../assets/icons/share-kakao.svg';
import shareFacebook from '../assets/icons/share-facebook.svg';
import shareLink from '../assets/icons/share-link.svg';
import '../styles/ModalShare.css';
import { useLocation } from "react-router-dom";

const ModalShare = ({ subTitle }) => {
  const location = useLocation();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='modal-share-content'>
      <div className='share-area'>{subTitle}</div>
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
          <a onClick={() => handleCopyClipBoard(`https://linklibrary313.netlify.app${location.pathname}`)}><img src={shareLink} /></a>
          <p>링크 복사</p>
        </div>
      </div>
    </div>
  );
}

export default ModalShare;