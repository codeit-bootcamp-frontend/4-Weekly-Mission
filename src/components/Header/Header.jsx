import { SharedProfile, FolderProfile } from './Profile';
import logo from './images/logo.png';
import './Header.css';

export default function Header({ style }) {
  return (
    <header className={style}>
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      {style === 'headerShared' ? <SharedProfile /> : <FolderProfile />}
    </header>
  );
}
