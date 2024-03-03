import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/Common/AddFolderList.module.css';

function AddFolderList({ className, children, onClick, onMouseEnter, onMouseLeave }) {
  const handleClickByEnter = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const containerClasses = classNames(styles.container, 'flex-row', 'align-center', className);

  return (
    <div
      className={containerClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleClickByEnter}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

AddFolderList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

AddFolderList.defaultProps = {
  className: '',
  children: null,
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

export default AddFolderList;
