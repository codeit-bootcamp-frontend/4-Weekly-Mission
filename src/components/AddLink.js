import '../styles/AddLink.css';
import iconLink from '../assets/icons/link.svg';

const AddLink = () => {
  return (
    <div className="add-link">
      <div className='add-link-content'>
        <div className='add-link-container'>
          <img className="add-link-icon" src={iconLink} alt="링크를 추가하기." />
          <input className="add-link-input" type="text" placeholder="링크를 추가해 보세요"></input>
        </div>
        <a className="add-link-button button-gradient">추가하기</a>
      </div>
    </div>
  );
}

export default AddLink;
