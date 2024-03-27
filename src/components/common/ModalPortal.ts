import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el: HTMLElement | null = document.getElementById('modal');
  if (!el) return null;
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
