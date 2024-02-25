import React from 'react';
import * as S from './Modal.style';
import { Button } from './../button/Button';
import { InputForm } from '../input-form/InputForm';
import CloseIcon from '../../../assets/modal/close.png';
import KakaoIcon from '../../../assets/modal/Kakao.svg';
import FacebookIcon from '../../../assets/modal/Facebook.svg';
import LinkIcon from '../../../assets/folder/link.svg';

export const FolderNameChangeModal = ({ closeModal }) => {
  return (
    <S.Container>
      <div className="modal">
        <S.CloseButton onClick={closeModal}>
          <img src={CloseIcon} alt="닫기 버튼" />
        </S.CloseButton>
        <h2 className="modal-title">폴더 이름 변경</h2>
        <div className="input-form">
          <InputForm placeholder="내용 입력" />
          <Button width={'280px'} fontSize={'1.6rem'}>
            변경하기
          </Button>
        </div>
      </div>
    </S.Container>
  );
};

export const FolderAddModal = ({ closeModal }) => {
  return (
    <S.Container>
      <div className="modal">
        <S.CloseButton onClick={closeModal}>
          <img src={CloseIcon} alt="닫기 버튼" />
        </S.CloseButton>
        <h2 className="modal-title">폴더 추가</h2>
        <div className="input-form">
          <InputForm placeholder="내용 입력" />
          <Button width={'280px'} fontSize={'1.6rem'}>
            추가하기
          </Button>
        </div>
      </div>
    </S.Container>
  );
};

export const FolderSharedModal = ({ closeModal, folderName, folderList, folderId }) => {
  const sharedLink = `${window.location.origin}/shared?user=1&folder=/${folderId}`;
  const onKakaoShareHandle = () => {};
  const onFacebookShareHandle = () => {
    const facebook = encodeURIComponent(sharedLink);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${facebook}`);
  };
  const onLinkCopyHandle = () => {
    window.navigator.clipboard.writeText(sharedLink).then(() => alert('링크 복사 완료'));
  };
  return (
    <S.Container>
      <div className="modal">
        <S.CloseButton onClick={closeModal}>
          <img src={CloseIcon} alt="닫기 버튼" />
        </S.CloseButton>
        <div className="modal-box">
          <h2 className="modal-title">폴더 공유</h2>
          <p className="folder-name">{folderName}</p>
        </div>
        <div className="shared-btn-box">
          <button className="shared-btn">
            <S.SharedIcon $background={'#FEE500'}>
              <img src={KakaoIcon} alt="카카오톡에 공유" />
            </S.SharedIcon>
            <p>카카오톡</p>
          </button>
          <button className="shared-btn" onClick={onFacebookShareHandle}>
            <S.SharedIcon $background={'#1877F2'}>
              <img src={FacebookIcon} alt="페이스북에 공유" />
            </S.SharedIcon>
            <p>페이스북</p>
          </button>
          <button className="shared-btn" onClick={onLinkCopyHandle}>
            <S.SharedIcon>
              <img src={LinkIcon} alt="링크 복사" />
            </S.SharedIcon>
            <p>링크 복사</p>
          </button>
        </div>
      </div>
    </S.Container>
  );
};
export const FolderDeleteModal = ({ closeModal, folderName }) => {
  return (
    <S.Container>
      <div className="modal">
        <S.CloseButton onClick={closeModal}>
          <img src={CloseIcon} alt="닫기 버튼" />
        </S.CloseButton>
        <div className="modal-box">
          <h2 className="modal-title">폴더 삭제</h2>
          <p className="folder-name">{folderName}</p>
        </div>
        <div className="input-form">
          <Button width={'280px'} fontSize={'1.6rem'} $background={' var(--Linkbrary-red, #FF5B56)'}>
            삭제하기
          </Button>
        </div>
      </div>
    </S.Container>
  );
};

export const LinkDeleteModal = ({ closeModal, folderName }) => {
  return (
    <S.Container>
      <div className="modal">
        <S.CloseButton onClick={closeModal}>
          <img src={CloseIcon} alt="닫기 버튼" />
        </S.CloseButton>
        <div className="modal-box">
          <h2 className="modal-title">링크 삭제</h2>
          <p className="folder-name">{folderName}</p>
        </div>
        <div className="input-form">
          <Button width={'280px'} fontSize={'1.6rem'} $background={' var(--Linkbrary-red, #FF5B56)'}>
            삭제하기
          </Button>
        </div>
      </div>
    </S.Container>
  );
};

export const AddToFolderModal = ({ closeModal, folderName, folderList }) => {
  return (
    <S.Container>
      <div className="modal">
        <S.CloseButton onClick={closeModal}>
          <img src={CloseIcon} alt="닫기 버튼" />
        </S.CloseButton>
        <div className="modal-box">
          <h2 className="modal-title">폴더에 추가</h2>
          <p className="folder-name">{folderName}</p>
        </div>
        <S.AddFolderBox>
          {folderList.map((list) => (
            <div className="add-folder-list" key={list.id}>
              <h2 className="add-folder-title">{list.name}</h2>
              <p className="folder-link-count">{list.link.count}개 링크</p>
            </div>
          ))}
        </S.AddFolderBox>
        <div className="input-form">
          <Button width={'280px'} fontSize={'1.6rem'}>
            추가하기
          </Button>
        </div>
      </div>
    </S.Container>
  );
};
