import Navbar from '../../common/Navbar/Navbar';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="header">
      <Navbar user={user} />
    </header>
  );
};

export default Header;
