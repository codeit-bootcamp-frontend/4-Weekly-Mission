import FloatingAddImg from '../../assets/floating-add.svg';

function FloatingButton() {
  return (
    <div className='floating__button'>
      <p className='floating__button--text'>폴더 추가</p>
      <img className='floating__button--img' src={FloatingAddImg} alt='플로팅 버튼 폴더 추가 아이콘' />
    </div>
  );
}

export default FloatingButton;
