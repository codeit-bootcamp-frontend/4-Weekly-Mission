import { useState } from 'react';

import Modal from '../../../components/Modal/Modal';
import SearchBar from '../../../components/SearchBar';
import CardGrid from '../../../components/CardGrid';
import Sorting from '../../../components/Sorting';
import Option from '../../../components/Option';
import addImg from '../../../assets/add.png';
import addWhiteImg from '../../../assets/add-white.png';
import './FolderSection.css';

const FolderSection = () => {
  const [selectedFolder, setSelectedFolder] = useState('전체');
  const [toggleModal, setToggleModal] = useState(false);
  const [links, setLinks] = useState([]);
  let showOptionTool = true;

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleFolderSelect = (folderName, folderLinks) => {
    setSelectedFolder(folderName);
    setLinks(folderLinks);
    showOptionTool = folderName !== '전체';
  };

  return (
    <section className='section-folder'>
      <SearchBar />
      <div className='toolbar'>
        <Sorting onSelect={handleFolderSelect} />
        <div className='add-folder-tool'>
          <div className='add-folder-text' onClick={handleToggleModal}>
            폴더 추가
          </div>
          <img
            className='add-icon'
            src={addImg}
            srcSet={`${addImg} 767w, ${addWhiteImg} 1024w`}
            sizes='(min-width: 767px) 16px'
            alt='add'
          />
        </div>
      </div>
      <div className='toolbar' id='toolbar-edit'>
        <div className='select-title'>{selectedFolder}</div>
        {showOptionTool && <Option folderName={selectedFolder} />}
      </div>
      {links.length === 0 ? (
        <div className='no-data'>저장된 링크가 없습니다</div>
      ) : (
        links.length > 0 && <CardGrid links={links} />
      )}

      {toggleModal && (
        <Modal
          title={'폴더 추가'}
          btnName={'추가하기'}
          placeholder={'내용입력'}
          hasInput={true}
          hasButton={true}
          onClose={handleToggleModal}
          folderName={selectedFolder}
        />
      )}
    </section>
  );
};

export default FolderSection;
