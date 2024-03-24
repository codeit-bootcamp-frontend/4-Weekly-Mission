import '../../styles/style.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUser } from '../../util/api';
import Header from './header/Header';
import Footer from './footer/Footer';
import { User } from '../../types/types';

function Layout() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const handleUserLoad = async () => {
      try {
        const user = await getUser();

        setUser(user);
      } catch (err) {
        // TODO: err.message 하고 싶었음
        console.error(err);
      }
    };

    handleUserLoad();
  }, []);

  // TODO: user가 null이라면?
  return (
    <>
      <Header user={user} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
