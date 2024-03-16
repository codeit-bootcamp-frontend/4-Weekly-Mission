import React from 'react';
import trashcanIcon from '../../../assets/trashcanIcon.svg';
import styles from './deleteButton.module.scss';

function DeleteButton({ onClick }) {
  return (
    <button className={styles.deleteButton} type="button" onClick={onClick}>
      <img src={trashcanIcon} alt="Delete" />
    </button>
  );
}
export default DeleteButton;
