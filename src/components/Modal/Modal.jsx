import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { VscChromeClose } from 'react-icons/vsc';

import { allowScroll, preventScroll } from '../../utils/modalScroll';

import styles from './Modal.module.scss';

const ModalPortal = ({ children }) => {
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    setIsRendering(false);
  }, []);

  if (isRendering) return null;
  return ReactDOM.createPortal(<>{children}</>, document.getElementById('root'));
};

const Modal = ({ title, children, onClick }) => {
  const outSection = useRef();

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <ModalPortal>
      <section
        className={styles.layout}
        ref={outSection}
        onClick={e => {
          outSection.current === e.target && onClick();
        }}>
        <div className={styles.box}>
          <button className={styles.closeButton} onClick={onClick}>
            <VscChromeClose />
          </button>
          <h2>{title}</h2>
          {children}
        </div>
      </section>
    </ModalPortal>
  );
};

export default Modal;
