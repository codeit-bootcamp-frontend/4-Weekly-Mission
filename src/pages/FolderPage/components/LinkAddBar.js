import linkIcon from '../../../assets/linkIcon.svg';
import GradationButton from '../../../components/GradationButton';

import '../../../styles/linkAddBar.css';

function LinkAddBar() {
  const placeholder = '링크를 추가해 보세요';
  return (
    <div className="link-add">
      <form className="link-add__bar">
        <div>
          <img
            className="link-add__bar--img"
            src={linkIcon}
            alt="linkIcon"
          ></img>
          <input
            className="link-add__bar--input"
            placeholder={placeholder}
          ></input>
        </div>
        <GradationButton text="추가하기"></GradationButton>
      </form>
    </div>
  );
}
export default LinkAddBar;
