import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
}
const ModalPortal: React.FC<Props> = ({ children }) => {
  const el = document.getElementById('modal');
  if (!el) {
    return null;
  }
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
