import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';
import useOutsideClick from '../../hooks/useOutsideClick';
import { allowScroll, preventScroll } from '../../utils/modalScroll';
import { ModalProps } from './Modal.types';
import styles from './Modal.module.scss';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    setIsRendering(false);
  }, []);

  if (isRendering) return null;
  return ReactDOM.createPortal(<>{children}</>, document.getElementById('root') as HTMLElement) as JSX.Element;
};

const Modal = ({ title, children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onClose);

  const handleCloseButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose();
  };

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <ModalPortal>
      <section className={styles.layout}>
        <div className={styles.box} ref={modalRef}>
          <button className={styles.closeButton} onClick={handleCloseButtonClick}>
            <VscChromeClose />
          </button>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </section>
    </ModalPortal>
  );
};

export default Modal;
