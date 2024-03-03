import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from 'components/Common/TextInput.module.css';

function TextInput({ className, value, onChange, placeholder }) {
  const inputClasses = classNames(
    styles.input,
    'background-white',
    'text-color-gray100',
    'border-gray20-1px',
    className
  );

  return <input className={inputClasses} type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  value: '',
  onChange: null,
  placeholder: '',
};

export default TextInput;
