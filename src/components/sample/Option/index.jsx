import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { optionBtn } from '../../utils/imageImport';
import styles from './index.module.scss';

const Option = ({
  selectedOption,
  setSelectedOption,
  selectedButton,
  setSelectedButton,
}) => {
  const colorValues = ['beige', 'purple', 'blue', 'green'];

  // url 공통 상수 파일 만들면 수정
  const apiResponse = useFetchData(
    'https://rolling-api.vercel.app/background-images/',
  );
  const imageUrls = apiResponse ? apiResponse.imageUrls : [];

  const handleToggle = option => {
    setSelectedOption(option);
    setSelectedButton(0);
  };
  // console.log 나중에 데이터 연결하면 수정 예정
  const handleButtonClick = buttonIndex => {
    setSelectedButton(buttonIndex);
    if (selectedOption === 'image' && imageUrls[buttonIndex]) {
      // 이미지 모드일 때 URL 전달
      console.log('Image URL:', imageUrls[buttonIndex]);
    } else if (selectedOption === 'color') {
      // 컬러 모드일 때 컬러 값 전달
      console.log('Color Value:', colorValues[buttonIndex]);
    }
  };

  return (
    <div>
      <div className={styles.toggleButtons}>
        <button
          type="button"
          className={selectedOption === 'color' ? styles.selectedOption : ''}
          onClick={() => handleToggle('color')}
        >
          컬러
        </button>
        <button
          type="button"
          className={selectedOption === 'image' ? styles.selectedOption : ''}
          onClick={() => handleToggle('image')}
        >
          이미지
        </button>
      </div>
      <div className={styles.buttonsContainer}>
        {[0, 1, 2, 3].map(index => (
          <button
            key={index}
            type="button"
            className={`${styles.buttonStyle} ${selectedOption === 'color' ? styles[colorValues[index]] : ''} ${selectedButton === index ? styles.selectedImage : ''}`}
            style={{
              backgroundImage:
                selectedOption === 'image' && imageUrls[index]
                  ? `url(${imageUrls[index]})`
                  : 'none',
            }}
            onClick={() => handleButtonClick(index)}
          >
            {selectedButton === index && (
              <img
                src={optionBtn}
                alt="Option Button"
                className={styles.imageOverlay}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Option;
