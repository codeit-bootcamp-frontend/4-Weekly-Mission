import { SharedProfile, FolderProfile } from './Profile';
import logo from './images/logo.png';
import './Header.css';
import type { ProfileData } from './Profile';

interface HeaderProps {
  style: string;
}

export default function Header({ style }: HeaderProps, user: ProfileData) {
  return (
    <header className={style}>
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      {style === 'headerShared' ? <SharedProfile userData={user} /> : <FolderProfile userData={user} />}
    </header>
  );
}
