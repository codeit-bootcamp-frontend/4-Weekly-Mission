import '../css/Reset.css';
import '../css/Global.css';
import '../../css/Modal.css'

const FolderDeleteModal = ({ isOpen, closeModal }) => {
  return (
    <>
      <div
      id='background'
      style={{
        display: isOpen ? 'flex' : 'none',
      }}>
      <div id='whiteBox'>
      <img id='closeBtn' src='/img/_close.png' alt='닫기 버튼' onClick={closeModal}/>
        <div id='title'>
            <p
              style={{
                color: '#373740',
                fontSize: '2rem',
                fontWeight: '700',
              }}
            >
              폴더 삭제
            </p>
            <p
              style={{
                color: '#9FA6B2',
                fontSize: '1.4rem',
                fontWeight: '400',
                lineHeight: '2.2rem',
              }}
            >
              폴더명
            </p>
          </div>
          <div>
            <button
              style={{
                width: '28rem',
                background: '#FF5B56',
                padding: '1.6rem 2rem',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  color: '#F5F5F5',
                  fontSize: '1.6rem',
                  fontWeight: '600',
                }}
              >
                삭제하기
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderDeleteModal;
