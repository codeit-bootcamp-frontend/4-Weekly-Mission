import addIcon from '../assets/folder/add.svg';

import './FolderAddBtn.css'

const FolderAddBtn = () => {
  return (
    <div className='add-btn'>
      <span className='add-btn_text'>폴더 추가</span>
      <img src={addIcon} alt='추가' className='add-btn_icon'/>
    </div>
  )
}

export default FolderAddBtn;