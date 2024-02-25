import '../styles/FolderList.css';
import iconPlus from '../assets/logo/plus.svg';

const FolderList = () => {
  return (
    <div className='folder-list'>
      <div className='folder-list-container'>
        <a className='folder'>전체</a>
        <a className='folder'>폴더1</a>
      </div>
      <div className='add-folder-container'>
        <a className='add-folder'>폴더 추가</a>
        <img className='add-folder-icon' src={iconPlus} alt='폴더 추가하기.' />
      </div>
    </div>
  );
};

export default FolderList;
