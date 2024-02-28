import classNames from 'classnames';
import React, { useState } from 'react';

import addLinkIcon from 'assets/images/link.svg';

import useModal from 'hooks/useModal';

import AddLinkButton from 'components/Common/AddLInkButton';
import styles from 'components/Header/AddLinkBar.module.css';
import { modalList } from 'components/Modal/Modal';

function AddLinkBar() {
  const [addLinkValue, setAddLinkValue] = useState('');
  const { openModal } = useModal();

  const handleInputChange = (e) => {
    setAddLinkValue(e.target.value);
  };

  const handleAddLinkButtonClick = () => {
    if (!addLinkValue) {
      return null;
    }

    console.log('AddLink');
    const link = { url: addLinkValue };

    const handleAddLink = () => {
      console.log('handleAddLink');
      console.log(link);
    };

    return openModal(modalList.AddToForderModal, { onSubmit: handleAddLink, link });
  };

  const addLinkClasses = classNames(styles['add-link-bar'], 'position-relative', 'width-full', 'margin-auto');
  const inputClasses = classNames(styles['add-link-bar-input'], 'background-white', 'text-color-gray60', 'width-full');
  const inputImgClasses = classNames(styles['add-link-bar-icon'], 'position-absolute');
  const addLinkButtonClasses = classNames(styles['add-link-button'], 'position-absolute');

  return (
    <div className={addLinkClasses}>
      <input
        className={inputClasses}
        type="text"
        value={addLinkValue}
        onChange={handleInputChange}
        placeholder="링크를 추가해 보세요"
      />
      <img className={inputImgClasses} src={addLinkIcon} alt="addLinkIcon" />
      <AddLinkButton className={addLinkButtonClasses} onClick={handleAddLinkButtonClick} />
    </div>
  );
}

export default AddLinkBar;
