import React, { useState } from 'react';
import { arrowTopBtn, arrowDownBtn } from '../../utils/imageImport';
import styles from './index.module.scss';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.length > 0 ? options[0] : 'Placeholder',
  );

  const toggleDropdown = () => {
    if (options.length === 0) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.dropDownContainer} ${options.length === 0 ? styles.noOptionsError : ''}`}
    >
      <button
        type="button"
        className={`${styles.selectContainer} ${options.length === 0 ? styles.noOptionsError : ''}`}
        onClick={toggleDropdown}
      >
        <input
          type="button"
          className={styles.selectedOption}
          value={selectedOption}
          readOnly
        />
        <span className={styles.icon}>
          <img src={isOpen ? arrowTopBtn : arrowDownBtn} alt="" />
        </span>
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map(option => (
            <li
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={option === selectedOption}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {options.length === 0 && (
        <div className={styles.noOptionsError}>
          <p>옵션을 표시할 수 없습니다.</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
