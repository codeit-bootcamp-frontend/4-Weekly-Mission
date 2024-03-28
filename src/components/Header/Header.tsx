import SharedProfile from './SharedProfile';
import FolderProfile from './FolderProfile';
import logo from './images/logo.png';
import './Header.css';

export interface ProfileData {
  profileImageSource: string;
  image_source: string;
  email: string;
  data: any[];
}

export interface HeaderProps {
  style: string;
  user?: ProfileData;
}

export default function Header({ style, user }: HeaderProps) {
  return (
    <header className={style}>
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      {style === 'headerShared' && user ? <SharedProfile userData={user} /> : <FolderProfile userData={user} />}
    </header>
  );
}
