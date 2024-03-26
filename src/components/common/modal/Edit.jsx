import { ModalBasic } from './ModalBasic';

export function EditFolder({ folderName, onClickOutside }) {
  const item = {
    title: '폴더 이름 변경',
    subtitle: '',
    contents: 'edit',
    placeholder: folderName,
    isRed: false,
    button: '변경하기',
  };
  return <ModalBasic item={item} onClickOutside={onClickOutside} />;
}
