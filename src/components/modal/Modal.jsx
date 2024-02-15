import ModalCloseButton from './ModalCloseIcon';
import ModalShareList from './ModalShareList';
import ModalCategoryList from './ModalCategoryList';
import ModalTitle from './ModalTitle';
import ModalForm from './ModalForm';
import '../../styles/modal.css';

function Modal({ modalAction, setModalAction, categoryList }) {
  const categoryListLoop = categoryList.slice(1); // 전체 카테고리는 제외
  const actionScript = {
    '폴더 이름 변경': {
      elementList: [<ModalTitle title={modalAction.action} />, <ModalForm buttonText='변경하기' />],
    },
    '폴더 추가': {
      elementList: [<ModalTitle title={modalAction.action} />, <ModalForm buttonText='추가하기' />],
    },
    '폴더 공유': {
      elementList: [
        <ModalTitle title={modalAction.action} />,
        <p className='modal__subTitle'>{modalAction.subTitle}</p>,
        <ModalShareList folderName={modalAction.subTitle} />,
      ],
    },
    '폴더에 추가': {
      elementList: [
        <ModalTitle title={modalAction.action} />,
        <p className='modal__subTitle'>{modalAction.subTitle}</p>,
        <ModalCategoryList categoryListLoop={categoryListLoop} />,
        <button className='modal__button button-blue'>추가히기</button>,
      ],
    },
    '링크 삭제': {
      elementList: [
        <ModalTitle title={modalAction.action} />,
        <p className='modal__subTitle'>{modalAction.subTitle}</p>,
        <button className='modal__button button-red'>삭제하기</button>,
      ],
    },
    '폴더 삭제': {
      elementList: [
        <ModalTitle title={modalAction.action} />,
        <p className='modal__subTitle'>{modalAction.subTitle}</p>,
        <button className='modal__button button-red'>삭제하기</button>,
      ],
    },
  };

  const handleModalClose = () => {
    setModalAction({
      isView: false,
      action: '',
      subTitle: '',
    });
  };

  return (
      <div className='modal__wrap'
      style={{
        display: modalAction.isView ? "block" : "none"
      }}>
        <div className='modal'>
          <ModalCloseButton onClick={handleModalClose} />
          {actionScript[modalAction.action] && actionScript[modalAction.action].elementList.map((list, idx) => {
            return <div key={idx}>{list}</div>;
          })}
        </div>
      </div>
  );
}

export default Modal;
