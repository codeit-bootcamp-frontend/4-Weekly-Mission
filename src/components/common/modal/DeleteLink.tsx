import { ModalBasic } from './ModalBasic';

export function DeleteLink({ url, onClickOutside }) {
  const item = {
    title: '링크 삭제',
    subtitle: url,
    contents: '',
    placeholder: '',
    isRed: true,
    button: '삭제하기',
  };
  return <ModalBasic item={item} onClickOutside={onClickOutside} />;
}
