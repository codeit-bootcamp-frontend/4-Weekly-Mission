import { useCallback, useEffect } from 'react';

/**
 * ref 외부 클릭 시 callback 수행
 * @param {React.RefObject} ref
 * @param {functino} callback
 */

function useOutSideClick(ref, callback) {
  const handleClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback?.();
    },
    [ref, callback]
  );
  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [ref, callback, handleClick]);
}

export default useOutSideClick;
