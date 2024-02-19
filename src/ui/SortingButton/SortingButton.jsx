import { useEffect, useState } from 'react';
import './SortingButton.css';
import { SHARE_BUTTON, RENAME_BUTTON, DELETE_BUTTON } from './constant';
import { useGetUserFolders } from '../../data-access/useGetUserFolders';

const SortingButton = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [selectedButtonName, setSelectedButtonName] = useState('전체');
  // const { foldersData } = useGetUserFolders();
  // const { data: folders } = foldersData || {};

  const { foldersData } = useGetUserFolders(); // 구조분해 할당을 여기서 직접 수행
  const folders = foldersData?.data || [];

  console.log(folders);

  const handleButtonClick = (buttonIndex, buttonName) => {
    setActiveButton(buttonIndex);
    setSelectedButtonName(buttonName);
    // 추가로 원하는 작업 수행 가능
  };
  const handleAddButtonClick = () => {
    // 추가로 원하는 작업 수행 가능
  };

  useEffect(() => {}, [selectedButtonName]);

  return (
    <div className="SortingButton">
      <div className="SortingButton-form">
        <span>
          <button
            onClick={() => handleButtonClick(0, '전체')}
            className={
              activeButton === 0 ? 'sort-button active' : 'sort-button'
            }
          >
            전체
          </button>
          {folders.length > 0 &&
            folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => handleButtonClick(folder.id, folder.name)}
                className={`sort-button ${
                  activeButton === folder.id ? 'active' : ''
                }`}
              >
                {folder.name}
              </button>
            ))}
        </span>
        <button onClick={() => handleAddButtonClick()} className="add-button">
          폴더 추가+
        </button>
      </div>
      <div className="editor-form">
        <div className="selectedButton-name">{selectedButtonName}</div>
        <div className="editor">
          <button className="editor-button">
            <img src={SHARE_BUTTON} alt="공유 버튼" />
          </button>
          <button className="editor-button">
            <img src={RENAME_BUTTON} alt="이름 변경 버튼" />
          </button>
          <button className="editor-button">
            <img src={DELETE_BUTTON} alt="삭제 버튼" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingButton;
