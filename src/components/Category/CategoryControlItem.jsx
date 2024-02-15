import ShareIcon from '../../assets/category-share.svg';
import ModifyIcon from '../../assets/category-modify.svg';
import DeleteIcon from '../../assets/category-delete.svg';

const imageObj = {
  "폴더 공유": ShareIcon,
  "폴더 이름 변경": ModifyIcon,
  "폴더 삭제": DeleteIcon,
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
