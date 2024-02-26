import { useState } from 'react';
import './Modal.css'

const Share = ({ isOpen, closeModal }) => {
  const [currentFolderId, setCurrentFolderId] = useState(null); //아직 파일 공유용 없어서 setCurrentFolderId사용못함

  const handleKakaoClick = () => {
    const host = window.location.origin;
    const shareUrl = `${host}/shared/${currentFolderId}`;
    // 카카오톡 공유 기능 호출
    window.open(`https://www.kakaocorp.com/page?url=${encodeURIComponent(shareUrl)}`);
  };

  const handleFacebookClick = () => {
    const host = window.location.origin;
    const shareUrl = `${host}/shared/${currentFolderId}`;
    // 페이스북 공유 기능 호출
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
  };

  const handleLinkCopyClick = () => {
    const host = window.location.origin;
    const shareUrl = `${host}/shared/${currentFolderId}`;
    // 클립보드에 링크 복사
    navigator.clipboard.writeText(shareUrl);
    alert('링크가 클립보드에 복사되었습니다.');
  };

  return (
    <>
      <div
        id='background'
        style={{
          display: isOpen ? 'flex' : 'none',
          background: 'rgba( 0, 0, 0, 0.4 )',
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          id='whiteBox'
          style={{
            display: 'flex',
            padding: '3.2rem 4rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            background: '#FFFFFF',
            borderRadius: '1.5rem',
            gap: '2.4rem',
            zIndex: '1',
          }}>
        <img src='/img/_close.png' alt='닫기 버튼' onClick={closeModal} style={{
            position: 'absolute',
            top: '1.6rem',
            right: '1.6rem',
            width: '2.4rem',
            height: '2.4rem',
            }}/>
          <div
            id='title'
            style={{
              width: '28rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
            <div>
              <p
                style={{
                  color: '#373740',
                  fontSize: '2rem',
                  fontWeight: '700',
                }}>
                폴더 공유
              </p>
            </div>
            <div>
              <p
                style={{
                  color: '#9FA6B2',
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  lineHeight: '2.2rem',
                }}>
                폴더명
              </p>
            </div>
          </div>
          <div className='icons'>
            <div id='kakao' onClick={handleKakaoClick}>
              <img src='img/Kakao.svg' style={{background: '#FEE500'}} alt='카카오톡'></img>
              <p>카카오톡</p>
            </div>
            <div id='facebook' onClick={handleFacebookClick}>
              <img src='img/Facebook.svg' style={{background: '#1877F2'}} alt='페이스북'></img>
              <p>페이스북</p>
            </div>
            <div id='linkcopy' onClick={handleLinkCopyClick}>
              <img src='img/link.svg' style={{background: 'rgba(157, 157, 157, 0.04)'}} alt='링크 복사'></img>
              <p>링크 복사</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;