import shareIcon from '../../assets/share-icon.png';
import penIcon from '../../assets/pen.png';
import deleteIcon from '../../assets/delete.png';
import './Option.css';

const OptionTool = () => {
  const options = [
    { icon: shareIcon, alt: 'share', text: '공유' },
    { icon: penIcon, alt: 'pen', text: '이름 변경' },
    { icon: deleteIcon, alt: 'delete', text: '삭제' },
  ];

  return options.map((option, index) => (
    <div key={index} className='option-tool'>
      <img className='option-img' src={option.icon} alt={option.alt} />
      <div className='option-text'>{option.text}</div>
    </div>
  ));
};

export default OptionTool;
