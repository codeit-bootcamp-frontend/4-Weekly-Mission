import '../styles/folderOptionBar.css';
import shareIcon from '../../../assets/shareIcon.svg';
import renameIcon from '../../../assets/renameIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';
import OptionButton from './OptionButton';
function FolderOptionBar({ text = '유용한 글', selectedFolderId }) {
  const buttonProps = [
    {
      id: 1,
      svg: shareIcon,
      text: '공유',
    },
    {
      id: 2,
      svg: renameIcon,
      text: '이름 변경',
    },
    {
      id: 3,
      svg: deleteIcon,
      text: '삭제',
    },
  ];

  return (
    <div className="folder__option-bar">
      <span className="folder__option-bar--text">{text}</span>
      <div className="folder__option-bar--buttons">
        {selectedFolderId !== 1
          ? buttonProps.map((prop) => (
              <OptionButton
                key={prop.id}
                svg={prop.svg}
                text={prop.text}
              ></OptionButton>
            ))
          : ''}
      </div>
    </div>
  );
}
export default FolderOptionBar;
