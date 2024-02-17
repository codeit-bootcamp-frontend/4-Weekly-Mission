import '../styles/style.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUser } from '../util/api';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState(null);

  const handleUserLoad = async () => {
    try {
      const user = await getUser();

      setUser(user);
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

export default App;
