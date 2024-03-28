import { Link } from 'react-router-dom';
import navStyles from './NavBar.module.css';
import logoImg from '../../../assets/linkbrary-logo.png';
import { Button } from '../button/Button';

interface SampleUser {
  email: string;
  id: number;
  image_source: string;
  name: string;
}
interface User {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}
interface Props {
  user: SampleUser | User;
  isFixed?: boolean;
}
const NavBar: React.FC<Props> = ({ user, isFixed = false }) => {
  const backgroundStyles = `${navStyles.background} ${
    isFixed ? navStyles.fixed : ''
  }`;

  return (
    <div className={backgroundStyles}>
      <div className={navStyles.form}>
        <Link to="/">
          <img src={logoImg} alt="Linkbrary Logo" />
        </Link>
        {user.id ? (
          <div className={navStyles.profileForm}>
            <img
              className={navStyles.profileImg}
              src={user['image_source']}
              alt="프로필 이미지"
            />
            <span className={navStyles.profileEmail}>{user.email}</span>
          </div>
        ) : (
          <Button width="normal">로그인</Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
