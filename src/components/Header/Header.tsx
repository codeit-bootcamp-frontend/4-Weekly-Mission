import SharedProfile from './SharedProfile';
import FolderProfile from './FolderProfile';
import logo from './images/logo.png';
import './Header.css';
import type { ProfileData } from './FolderProfile';

export interface HeaderProps {
  style: string;
}

export default function Header({ style }: HeaderProps, userData: ProfileData) {
  return (
    <header className={style}>
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      {style === 'headerShared' ? <SharedProfile userData={userData} /> : <FolderProfile userData={userData} />}
    </header>
  );
}
