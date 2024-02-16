function ModalForm({ buttonText }) {
  return (
    <form className='modal__form'>
      <label htmlFor='modal--input' className='label--hidden'>{`폴더 ${buttonText} 입력창`}</label>
      <input id='modal--input' className='modal__input' type='text' placeholder='내용 입력' />
      <button className='modal__button button-blue'>{buttonText}</button>
    </form>
  );
}

export default ModalForm;
