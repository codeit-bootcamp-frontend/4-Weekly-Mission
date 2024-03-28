import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode[] }) => {
  const element = document.getElementById('modal');
  return !element ? null : ReactDOM.createPortal(children, element);
};

export default ModalPortal;
