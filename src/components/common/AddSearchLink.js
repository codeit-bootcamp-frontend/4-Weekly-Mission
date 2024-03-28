import { useState } from 'react';
import Button from './Button';
import InputBox from './InputBox';
import ModalPortal from '../modal/ModalPortal';
import purpleLinkIcon from '../../assets/purple_link.svg';
import checkIcon from '../../assets/icon-check.svg';

import './AddSearchLink.css';

const AddSearchLink = ({ folderList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputSearchText, setInputSearchText] = useState('');

  const addLinkModal = () => {
    if (inputSearchText) {
      setIsModalOpen(!isModalOpen);
    } else {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <div className="add_search_link_area">
      <img className="link_icon" src={purpleLinkIcon} />
      <InputBox
        className="add_link_input"
        type="text"
        placeholder="링크를 검색해 보세요."
        onChange={(e) => setInputSearchText(e.target.value)}
      />
      <Button
        text="추가하기"
        class="button add_button"
        onClick={addLinkModal}
      />
      {isModalOpen && (
        <ModalPortal
          onClick={addLinkModal}
          buttonClass="button modal_button back_gra_purpleblue"
          modalTitle="폴더에 추가"
          buttonText="추가하기"
          selectFolderName="링크 주소"
        >
          <div className="folder_list">
            {/* TODO : map으로 그려주지 못하고 있음 */}
            {folderList &&
              folderList.map((folder) => {
                <div className="folder">
                  <div className="folder_name">{folder.name}</div>
                  <div className="folder_count">
                    {folder.link ? folder.link.count : 0}개 링크
                  </div>
                </div>;
              })}
          </div>
        </ModalPortal>
      )}
    </div>
  );
};
export default AddSearchLink;
