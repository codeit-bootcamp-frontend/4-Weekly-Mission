import classNames from 'classnames';
import React from 'react';

import styles from 'components/Common/TextInput.module.css';

interface TextInputProps {
  className?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

function TextInput({ className = '', value = '', onChange, placeholder = '' }: TextInputProps) {
  const inputClasses = classNames(
    styles.input,
    'background-white',
    'text-color-gray100',
    'border-gray20-1px',
    className
  );

  return <input className={inputClasses} type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default TextInput;
