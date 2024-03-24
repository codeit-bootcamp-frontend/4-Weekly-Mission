import ReactDom from 'react-dom';

const ModalPortal = ({ children }) => {
  const portal = document.getElementById('modal');
  return ReactDom.createPortal(children, portal);
};

export default ModalPortal;