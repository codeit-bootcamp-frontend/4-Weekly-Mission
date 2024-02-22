import '../../styles/style.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUser } from '../../util/api';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const [user, setUser] = useState(null);

  const handleUserLoad = async () => {
    try {
      const { data } = await getUser();

      setUser(data[0]);
    } catch (err) {
      console.error(err.message);
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
