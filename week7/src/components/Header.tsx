import logoImg from "../assets/Linkbrary.png";
import "./Header.css";
import Folder from "./Folder";
import { useMediaQuery } from "react-responsive";
import { UserType, Owner } from "../SharedPage";
const profileAccount = ({ user }: { user: UserType | null }) => {
  if (!user) {
    return false;
  }
  const { email, profileImageSource } = user;
  return (
    <div className="profile-info">
      <img className="logo" src={profileImageSource} alt="프로필 이미지" />
      <div>{email}</div>
    </div>
  );
};
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   profileImageSource: string;
// }
// interface HeaderProps {
//   user: User | null;
//   folderName: string | null;
//   owner: string | null;
// }
interface HeaderProps {
  user: UserType | null;
  folderName: string | null;
  owner: Owner | null;
}
function Header({ user, folderName, owner }: HeaderProps) {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return (
    <>
      <nav className="nav">
        <div className={isTablet ? "gnb-width-apply" : "gnb"}>
          <a href="/">
            <img alt="로고이미지" src={logoImg} />
          </a>
          {user ? profileAccount({ user }) : <button>Login</button>}
        </div>
      </nav>
      <Folder folderName={folderName} owner={owner} />
    </>
  );
}

export default Header;
