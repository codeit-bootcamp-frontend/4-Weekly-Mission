import { ChangeEvent, useState } from 'react';
import InputText from './AddLinkModal.style';

const AddLinkModal = () => {
  const [inputContent, setInputContent] = useState<string>('');
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };
  return (
    <InputText
      value={inputContent}
      onChange={changeInput}
      placeholder="내용 입력"
    />
  );
};

export default AddLinkModal;
