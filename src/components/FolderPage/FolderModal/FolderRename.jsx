import { useState } from 'react';
import {
  ModalHeader,
  StyledGradientButton,
  StyledInput,
} from './folderModalStyle';

const FolderRename = ({ selectedFolderName, onClose, onConfirm }) => {
  const [value, setValue] = useState(selectedFolderName);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    /** 추후 변경 api 연동시 사용 */
    alert(`${value}으(로) 추후 변경됩니다.`);
    onConfirm(value);
    onClose();
  };

  return (
    <>
      <ModalHeader>폴더 이름 변경</ModalHeader>
      <StyledInput
        value={value}
        onChange={handleChange}
        placeholder="새 폴더 이름"
      />
      <StyledGradientButton onClick={handleSubmit}>
        변경하기
      </StyledGradientButton>
    </>
  );
};

export default FolderRename;
