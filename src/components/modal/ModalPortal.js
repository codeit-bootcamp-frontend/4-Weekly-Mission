import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const ModalPortal = (prop, { children }) => {
  return createPortal(
    <Modal prop={prop}>{children}</Modal>,
    document.getElementById('root')
  );
};

export default ModalPortal;
