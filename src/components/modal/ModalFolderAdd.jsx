import ModalCategoryList from './ModalCategoryList';
function ModalFolderAdd({ categoryListLoop }) {
  return (
    <>
      <ModalCategoryList categoryListLoop={categoryListLoop} />
      <button className='modal__button button-blue'>추가히기</button>
    </>
  );
}

export default ModalFolderAdd;
