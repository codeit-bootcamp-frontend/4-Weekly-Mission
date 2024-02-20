import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './AddLinkBar.module.css';
import addLinkIcon from '../../assets/images/link.svg';
import AddLinkButton from '../Common/AddLInkButton';

function AddLinkBar() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const addLinkClasses = classNames(styles['add-link-bar'], 'position-relative', 'width-full', 'margin-auto');
  const inputClasses = classNames(styles['add-link-bar-input'], 'background-white', 'text-color-gray60', 'width-full');
  const inputImgClasses = classNames(styles['add-link-bar-icon']);
  const addLinkButtonClasses = classNames('position-absolute', styles['add-link-bar-button']);
  const containerClasses = classNames(styles['add-link-bar-container'], 'flex-row', 'position-absolute', 'width-full');

  return (
    <div className={addLinkClasses}>
      <input
        className={inputClasses}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="링크를 추가해 보세요"
      />
      <div className={containerClasses}>
        <img className={inputImgClasses} src={addLinkIcon} alt="addLinkIcon" />
        <AddLinkButton className={addLinkButtonClasses} />
      </div>
    </div>
  );
}

export default AddLinkBar;
