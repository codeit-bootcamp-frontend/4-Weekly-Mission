function ModalForm() {
  return (
    <form className='modal__form'>
      <input className='modal__input' type='text' placeholder='내용 입력' />
      <button className='modal__button button-blue'>변경하기</button>
    </form>
  );
}

export default ModalForm;
