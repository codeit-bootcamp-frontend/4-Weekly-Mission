import React from 'react';
import styled from 'styled-components';
import kakao from '../../assets/modal/kakao.svg';
import facebook from '../../assets/modal/facebook.svg';
import link from '../../assets/modal/link.svg';
import close from '../../assets/modal/close.svg';

const ShareModal = ({ onClose, selectFolder }) => {
  const currentFolderId = selectFolder;
  const sharedLink = `${window.location.origin}/shared/${currentFolderId}`;

  const shareToCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(sharedLink);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      alert('클립보드에 링크를 복사하는 중에 오류가 발생했습니다.');
    }
  };

  const shareToFacebook = () => {
    // const sharedLink = encodeURIComponent(url);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      // kakao.Share.sendCustom({
      //   templateId: 104703,
      //   templateArgs: {
      //     title: '제목 영역입니다.',
      //     description: '설명 영역입니다.',
      //   },
      // });
      kakao.Share.sendScrap({
        requestUrl: sharedLink,
        templateId: 104703,
      });
      kakao.cleanup();
    }
  };

  const handleClose = () => {
    onClose(false);
  };

  const handleStopEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ContentContainer onClick={handleStopEvent}>
        <ModalContent>
          <TitleContent>
            <h2>폴더 공유</h2>
            <span>폴더명</span>
          </TitleContent>
          <LinksContent>
            <LinkContent onClick={shareToKakao}>
              <img src={kakao} alt='kakao img' />
              <span>카카오톡</span>
            </LinkContent>
            <LinkContent onClick={shareToFacebook}>
              <img src={facebook} alt='facebook img' />
              <span>페이스북</span>
            </LinkContent>
            <LinkContent onClick={shareToCopyLink}>
              <img src={link} alt='link img' />
              <span>링크복사</span>
            </LinkContent>
          </LinksContent>
        </ModalContent>
        <ModalCloseBtn onClick={handleClose} />
      </ContentContainer>
    </ModalContainer>
  );
};

export default ShareModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ContentContainer = styled.div`
  width: 36rem;
  height: 20.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 4rem;
  gap: 2.4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--gray20);
  background-color: var(--white);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const TitleContent = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;

  & > h2 {
    color: var(--gray100);
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  }

  & > span {
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.57143;
  }
`;

const LinksContent = styled.div`
  display: flex;
  gap: 3.2rem;
`;

const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  & > img {
    width: 4.2rem;
    height: 4.2rem;
    cursor: pointer;
  }

  & > span {
    color: var(--gray100);
    font-family: Inter;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.15385;
  }
`;

const ModalCloseBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background-image: url(${close});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
