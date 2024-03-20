import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <section className={styles.layout}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default App;
