import linkIcon from './assets/link.svg';

import './AddLink.css';

const AddLink = () => {
  return (
    <div className='container-add-link'>
      <div className='add-link'>
        <div className='add-link_icon-box'>
          <img src={linkIcon} alt='링크' />
          <span className='text-add-link'>링크를 추가해 보세요</span>
        </div>
        <button className='add-link_button'>추가하기</button>
      </div>
    </div>
  )
}

export default AddLink;