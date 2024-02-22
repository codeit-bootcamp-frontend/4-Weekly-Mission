import React from 'react';
import '../../style/ShareModal.css';
import kakao from '../../assets/modal/kakao.svg';
import facebook from '../../assets/modal/facebook.svg';
import link from '../../assets/modal/link.svg';

const ShareModal = () => {
  return (
    <div className='ModalContainer'>
      <div className='ContentContainer'>
        <div className='ModalContent'>
          <div className='TitleContent'>
            <h2>폴더 공유</h2>
            <span>폴더명</span>
          </div>
          <div className='LinksContent'>
            <div className='LinkContent'>
              <img src={kakao} alt='kakao img' />
              <span>카카오톡</span>
            </div>
            <div className='LinkContent'>
              <img src={facebook} alt='facebook img' />
              <span>페이스북</span>
            </div>
            <div className='LinkContent'>
              <img src={link} alt='link img' />
              <span>링크복사</span>
            </div>
          </div>
        </div>
        <button className='ModalCloseBtn' />
      </div>
    </div>
  );
};

export default ShareModal;
