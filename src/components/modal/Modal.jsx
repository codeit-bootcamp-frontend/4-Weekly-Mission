import ModalCloseButton from './ModalCloseIcon';
import ModalShareList from './ModalShareList';
import ModalFolderAdd from './ModalFolderAdd';
import ModalTitle from './ModalTitle';
import ModalForm from './ModalForm';
import '../../styles/modal.css';

function Modal({ modalAction, setModalAction, categoryList }) {
  const categoryListLoop = categoryList.slice(1); // 전체 카테고리는 제외
  const isSubTitleView = modalAction.subTitle !== '' && modalAction.action !== '폴더 이름 변경';
  const actionScript = {
    '폴더 이름 변경': <ModalForm buttonText='변경하기' />,
    '폴더 추가': <ModalForm buttonText='추가하기' />,
    '폴더 공유': <ModalShareList folderName={modalAction.subTitle} />,
    '폴더에 추가': <ModalFolderAdd categoryListLoop={categoryListLoop} />,
    '링크 삭제': <button className='modal__button button-red'>삭제하기</button>,
    '폴더 삭제': <button className='modal__button button-red'>삭제하기</button>,
  };

  const handleModalClose = () => {
    setModalAction({
      isView: false,
      action: '',
      subTitle: '',
    });
  };

  return (
    <div
      className='modal__wrap'
      style={{
        display: modalAction.isView ? 'block' : 'none',
      }}
    >
      <div className='modal'>
        <ModalCloseButton onClick={handleModalClose} />
        <ModalTitle title={modalAction.action} />
        {isSubTitleView && <p className='modal__subTitle'>{modalAction.subTitle}</p>}
        {actionScript[modalAction.action]}
      </div>
    </div>
  );
}

export default Modal;
