import { ChangeEvent, useState } from 'react';
import InputText from './EditFolderModal.style';

const EditFolderModal = () => {
  const [inputContent, setInputContent] = useState<string>('');
  const changeInputContent = (e: ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };
  return (
    <InputText
      onChange={changeInputContent}
      value={inputContent}
      placeholder="유용한 팁"
    />
  );
};

export default EditFolderModal;
