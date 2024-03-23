import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}
const Portal: React.FC<PortalProps> = ({ children }) => {
  const el = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, el);
};

export default Portal;
