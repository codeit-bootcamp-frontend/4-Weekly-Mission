import { Children } from 'interfaces/componentsInterface';
import ReactDOM from 'react-dom';

/**
 * div#modal-root로 렌더링
 * @props {React.ReactNode} children
 */

interface PortalProps extends Children {}

function Portal({ children }: Children) {
  const el = document.getElementById('modal-root');
  if (!el) return null;

  return ReactDOM.createPortal(children, el);
}

export default Portal;
