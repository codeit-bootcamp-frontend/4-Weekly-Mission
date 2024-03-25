import ModalBase from './ModalBase';
import ModalInput from './ModalInput';
import { useState } from 'react';
import type { ModalBaseProps } from './ModalBase';

function EditNameModal({ onClose }: ModalBaseProps) {
  const [name, setName] = useState('');

  function handleChange() {
    setName('');
  }

  return (
    <ModalBase modalName="폴더 이름 변경" onClick={handleChange} centerSpace={<ModalInput />} onClose={onClose}>
      변경하기
    </ModalBase>
  );
}

export default EditNameModal;
