import ModalKaKaoIcon from '../../assets/modal-kakao.svg';
import ModalFacebookIcon from '../../assets/modal-facebook.svg';
import ModalLinkIcon from '../../assets/modal-link.svg';

const modalShareList = [
  {
    id: 1,
    backgroundColor: '#FEE500',
    icon: ModalKaKaoIcon,
    text: '카카오톡',
  },
  {
    id: 2,
    backgroundColor: '#1877F2',
    icon: ModalFacebookIcon,
    text: '페이스북',
  },
  {
    id: 3,
    backgroundColor: 'rgba(157, 157, 157, 0.04)',
    icon: ModalLinkIcon,
    text: '링크 복사',
  },
];

function ModalShareList({ folderName }) {
  const handleCopyClipBoard = async (folderName) => {
    try {
      await navigator.clipboard.writeText(folderName);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch (error) {
      alert('복사 실패!');
    }
  };
  const handleListClick = (text) => {
    switch (text) {
      case '링크 복사':
        handleCopyClipBoard(folderName);
        break;

      case '카카오톡':
        console.log('카카오톡 클릭');
        break;

      case '페이스북':
        console.log('페이스북 클릭');
        break;
    }
  };
  return (
    <ul className='modal__share'>
      {modalShareList.map((list) => {
        const { id, backgroundColor, icon, text } = list;
        return (
          <li key={id} className='modal__share--list' onClick={() => handleListClick(text)}>
            <div className='modal__icon--background' style={{ backgroundColor }}>
              <img src={icon} alt={`폴더 공유 ${text} 아이콘`} />
            </div>
            <p className='modal__icon--text'>{text}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ModalShareList;
