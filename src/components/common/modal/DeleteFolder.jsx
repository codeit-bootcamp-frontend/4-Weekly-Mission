import { ModalBasic } from './ModalBasic';

export function DeleteFolder({ folderName, onClickOutside }) {
  const item = {
    title: '폴더 삭제',
    subtitle: folderName,
    contents: '',
    placeholder: '',
    isRed: true,
    button: '삭제하기',
  };
  return <ModalBasic item={item} onClickOutside={onClickOutside} />;
}
