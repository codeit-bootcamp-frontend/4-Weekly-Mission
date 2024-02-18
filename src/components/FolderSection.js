import { useState, useEffect } from 'react';
import SearchBar from './ui/SearchBar';
import CardGrid from './CardGrid';
import Sorting from './ui/Sorting';
import Option from './ui/Option';
import addImg from '../assets/add.png';
import addWhiteImg from '../assets/add-white.png';
import './FolderSection.css';

const FolderSection = () => {
  const [selectedFolder, setSelectedFolder] = useState('전체');
  const [links, setLinks] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const addIcon = document.querySelector('.add-icon');
      if (window.innerWidth <= 767) {
        addIcon.src = addWhiteImg;
      } else {
        addIcon.src = addImg;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFolderSelect = async (folderName, folderLinks) => {
    setSelectedFolder(folderName);
    setLinks(folderLinks);
    setShowOptions(folderName !== '전체');
  };

  return (
    <section className='section-folder'>
      <SearchBar />
      <div className='toolbar'>
        <Sorting onSelect={handleFolderSelect} />
        <div className='add-folder-tool'>
          <div className='add-folder-text'>폴더 추가</div>
          <img className='add-icon' src={addImg} alt='add' />
        </div>
      </div>
      <div className='toolbar' id='toolbar-edit'>
        <div className='select-title'>{selectedFolder}</div>
        <div className='option'>{showOptions && <Option />}</div>
      </div>
      {links.length === 0 && (
        <div className='no-data font-body2-regular'>저장된 링크가 없습니다</div>
      )}
      {links.length > 0 && <CardGrid links={links} />}
    </section>
  );
};

export default FolderSection;
