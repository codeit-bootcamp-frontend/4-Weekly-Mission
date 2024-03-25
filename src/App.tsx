import { useContext, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { FooterContext } from './context/FooterContext';
import useInterSectionObserver from './hooks/useInterSectionObserver';
import styles from './App.module.scss';

const App = () => {
  const { updateFooterVisible } = useContext(FooterContext);
  const footerRef = useRef(null);
  const { isVisible } = useInterSectionObserver(footerRef);
  useEffect(() => {
    updateFooterVisible(isVisible);
  }, [isVisible]);
  return (
    <>
      <Header />
      <section className={styles.layout}>
        <Outlet />
      </section>
      <Footer ref={footerRef} />
    </>
  );
};
export default App;
