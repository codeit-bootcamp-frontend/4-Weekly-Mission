import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=> {
    console.log(isOpen);
  },[isOpen])

  return { isOpen, handleClick };
};

export default useModal;
