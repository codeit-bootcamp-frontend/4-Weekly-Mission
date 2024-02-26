import ReactDOM from 'react-dom';

/**
 * div#modal-root로 렌더링
 * @props {React.ReactNode} children
 */

function Portal({ children }) {
  const el = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, el);
}

export default Portal;
