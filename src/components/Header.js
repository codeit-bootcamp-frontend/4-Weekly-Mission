import '../styles/Header.css';
import smile from '../images/smile.svg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerBox">
        <div className="avatarBox">
          <img className="avatar" src={smile} alt="스마일 이미지" />
          <span>@코드잇</span>
        </div>
        <div className="favorite">⭐️ 즐겨찾기</div>
      </div>
    </div>
  );
}
