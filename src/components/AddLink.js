import Button from './ui/Button';
import linkIcon from '../assets/link-icon.png';
import './AddLink.css';

const AddLink = () => {
  return (
    <header className='add-link'>
      <div className='add-link-content'>
        <div className='add-link-text'>
          <img className='add-link-img' src={linkIcon} alt='link' />
          <input
            className='add-link-input'
            placeholder='링크를 추가해 보세요'
            type='text'
          />
        </div>
        <Button name='add'>추가하기</Button>
      </div>
    </header>
  );
};

export default AddLink;
