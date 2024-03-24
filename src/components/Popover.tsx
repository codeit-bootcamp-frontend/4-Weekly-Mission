import React, { useState, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Popover = ({ children, content }: Props) => {
  const [show, setShow] = useState(false);
  const popOverRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (popOverRef.current!.contains(event.target as Node)) setShow(false);
  };

  return (
    <div ref={popOverRef}>
      <button onClick={handleClick}>{children}</button>
      {show && <div>{content}</div>}
    </div>
  );
};

export default Popover;
