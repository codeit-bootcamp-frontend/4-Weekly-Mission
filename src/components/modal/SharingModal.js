import React from 'react';
import {
  ModalSharingicons,
  ModalSharingicon,
  ModalSharingName,
} from '../../styles/styledComponents/folderStyled';
import KakaoIcon from '../../assets/Images/ModalKakaoButton.png';
import FaceIcon from '../../assets/Images/ModalFacebookButton.png';
import LinkCopyIcon from '../../assets/Images/ModallinkCopyButton.png';
export const SharingModal = () => {
  return (
    <>
      <ModalSharingicons>
        <ModalSharingicon>
          <img src={KakaoIcon} alt="카카오" width="42px" height="42px" />
          <ModalSharingName>
            <p>카카오톡</p>
          </ModalSharingName>
        </ModalSharingicon>
        <ModalSharingicon>
          <img src={FaceIcon} alt="페이스북" width="42px" height="42px" />
          <ModalSharingName>
            <p>페이스북</p>
          </ModalSharingName>
        </ModalSharingicon>
        <ModalSharingicon>
          <img src={LinkCopyIcon} alt="링크복사" width="42px" height="42px" />
          <ModalSharingName>
            <p>링크 복사</p>
          </ModalSharingName>
        </ModalSharingicon>
      </ModalSharingicons>
    </>
  );
};
