import propTypes from 'prop-types';
import './Main.css';

function Main({ children }) {
  return (
    <main className="main flex-col">
      <div className="main-container width-full">{children}</div>
    </main>
  );
}

Main.propTypes = {
  children: propTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
