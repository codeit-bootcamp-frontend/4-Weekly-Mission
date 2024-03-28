import { ModalBasic } from './ModalBasic';

interface Props {
  url: string;
  onClickOutside: (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
const DeleteLink: React.FC<Props> = ({ url, onClickOutside }) => {
  const item = {
    title: '링크 삭제',
    subtitle: url,
    contents: '',
    placeholder: '',
    isRed: true,
    button: '삭제하기',
  };
  return <ModalBasic item={item} onClickOutside={onClickOutside} />;
};

export { DeleteLink };
