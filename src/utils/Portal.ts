import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const portal = document.getElementById('modal') as HTMLDivElement;
  return ReactDom.createPortal(children, portal);
};

export default ModalPortal;
