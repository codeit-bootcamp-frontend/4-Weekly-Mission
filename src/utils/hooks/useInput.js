import { useState } from 'react';

const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleInput];
};

export default useInput;
