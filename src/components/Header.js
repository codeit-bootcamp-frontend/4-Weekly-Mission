import './Header.css';

export default function Header({ folderName = '', owner = {} }) {
  return (
    <div className="header">
      <div className="headerBox">
        <div className="avatarBox">
          <img className="avatar" src={owner.profileImageSource} alt="스마일 이미지" />
          <span>@{owner.name}</span>
        </div>
        <div className="favorite">{folderName}</div>
      </div>
    </div>
  );
}
