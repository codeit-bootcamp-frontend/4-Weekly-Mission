import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleOutSectionClick = event => {
      const target = event.target;
      console.log(ref.current);
      console.log(target);
      if (ref.current && !ref.current.contains(target)) callback();
    };
    document.addEventListener('click', handleOutSectionClick);
    return () => document.removeEventListener('click', handleOutSectionClick);
  }, [ref, callback]);
};

export default useOutsideClick;
