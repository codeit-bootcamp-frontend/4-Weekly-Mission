import { useState } from 'react';
import {
  ModalHeader,
  StyledGradientButton,
  StyledInput,
} from './folderModalStyle';

const FolderAdd = ({ onClose, onConfirm }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    /** 추후 변경 api 연동시 사용 */
    alert(`${value}이 추후 추가됩니다.`);
    onConfirm(value);
    onClose();
  };

  return (
    <>
      <ModalHeader>폴더 추가</ModalHeader>
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder="새 폴더 이름"
      />
      <StyledGradientButton onClick={handleSubmit}>
        추가하기
      </StyledGradientButton>
    </>
  );
};

export default FolderAdd;
