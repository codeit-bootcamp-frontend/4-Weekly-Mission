import * as S from './Modal.style';
import Button from '../button/Button';
import CloseIcon from '../../assets/images/close.png';
import KakaoIcon from '../../assets/icons/Kakao.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import CheckIcon from '../../assets/icons/check.svg';
import LinkIcon from '../../assets/icons/link.svg';
import { useState } from 'react';

interface Folder {
  id: number;
  name: string;
  link: { count: number };
}
interface ModalProps {
  title: string;
  closeModal: () => void;
  folderName?: string | null;
  folderId?: number | null;
  folderList?: Folder[] | null;
}
const Modal: React.FC<ModalProps> = ({ title, closeModal, folderName, folderId, folderList }) => {
  const [listActive, setListActive] = useState<number | null>(null);
  const sharedLink = `${window.location.origin}/shared?user=1&folder=/${folderId}`;

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

        {folderName ? (
          <div className="modal-box">
            <h2 className="modal-title">{title}</h2>
            <p className="folder-name">{folderName}</p>
          </div>
        ) : (
          <h2 className="modal-title">{title}</h2>
        )}

        {folderId ? (
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
        ) : null}

        {folderList ? (
          <S.AddFolderBox>
            {folderList?.map((folder) => (
              <button
                className={`add-folder-list ${listActive === folder.id ? 'active' : ''}`}
                key={folder.id}
                onClick={() => setListActive(folder.id)}>
                <h2 className="add-folder-title">{folder.name}</h2>
                <p className="folder-link-count">{folder.link.count}개 링크</p>
                {listActive === folder.id && <img className="check-icon" src={CheckIcon} alt="체크 아이콘" />}
              </button>
            ))}
          </S.AddFolderBox>
        ) : null}

        <div className="input-form">
          {(title === '폴더 이름 변경' || title === '폴더 추가') && <S.InputForm placeholder="내용 입력" />}

          {title === '폴더 공유' ? null : (
            <Button
              width={'280px'}
              fontSize={'1.6rem'}
              background={title === '폴더 삭제' || title === '링크삭제' ? '#FF5B56' : undefined}>
              {title === '폴더 삭제' || title === '링크삭제' ? '삭제하기' : `${title.slice(-2)}하기`}
            </Button>
          )}
        </div>
      </div>
    </S.Container>
  );
};

export default Modal;
