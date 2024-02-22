import React from 'react';

const ModalContent = ({ onClose, children }) => {
  return (
    <>
      <div>{children}</div>
      <button onClick={onClose} />
    </>
  );
};

export default ModalContent;
