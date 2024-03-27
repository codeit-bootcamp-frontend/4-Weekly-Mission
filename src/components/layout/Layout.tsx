import '../../styles/style.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUser } from '../../util/api';
import Header from './header/Header';
import Footer from './footer/Footer';
import { SystemError } from '../../types/err';
import { User } from '../../types/api';

function Layout() {
  const [user, setUser] = useState<User>();

  const handleUserLoad = async () => {
    try {
      const user = await getUser();

      setUser(user);
    } catch (error) {
      const err = error as SystemError;
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleUserLoad();
  }, []);

  return (
    <>
      <Header user={user} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
