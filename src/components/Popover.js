import React, { useState, useRef } from 'react';

const Popover = ({ children, content }) => {
  const [show, setShow] = useState(false);
  const popOverRef = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleOutsideClick = event => {
    if (popOverRef.current && !popOverRef.current.contains(event.target)) setShow(false);
  };

  return (
    <div ref={popOverRef}>
      <button onClick={handleClick}>{children}</button>
      {show && <div>{content}</div>}
    </div>
  );
};

export default Popover;
