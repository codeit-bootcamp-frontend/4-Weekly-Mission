import '../styles/folderOptionBar.css';
import shareIcon from '../../../assets/shareIcon.svg';
import renameIcon from '../../../assets/renameIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';
import OptionButton from './OptionButton';
function FolderOptionBar({ text = '유용한 글' }) {
  const buttonProps = [
    {
      svg: shareIcon,
      text: '공유',
    },
    {
      svg: renameIcon,
      text: '이름 변경',
    },
    {
      svg: deleteIcon,
      text: '삭제',
    },
  ];

  return (
    <div className="folder__option-bar">
      <span className="folder__option-bar--text">{text}</span>
      <div className="folder__option-bar--buttons">
        {buttonProps.map((prop) => (
          <OptionButton prop={prop}></OptionButton>
        ))}
      </div>
    </div>
  );
}
export default FolderOptionBar;
