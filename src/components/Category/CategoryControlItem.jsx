import ShareImg from '../../assets/share.svg';
import ModifyImg from '../../assets/modify.svg';
import DeleteImg from '../../assets/delete.svg';

const imageObj = {
  "폴더 공유": ShareImg,
  "폴더 이름 변경": ModifyImg,
  "폴더 삭제": DeleteImg,
};

function CategoryControlItem({ value, text, handleModalAction }) {
  return (
    <li className='content__util--list' onClick={() => handleModalAction(value)}>
      <img className='content__util--img' src={imageObj[value]} alt={`${value}이미지`} />
      <span className='content__util--text'>{text}</span>
    </li>
  );
}

export default CategoryControlItem;
