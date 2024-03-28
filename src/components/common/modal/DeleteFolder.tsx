import { ModalBasic } from './ModalBasic';

interface Props {
  folderName: string;
  onClickOutside: (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
const DeleteFolder: React.FC<Props> = ({ folderName, onClickOutside }) => {
  const item = {
    title: '폴더 삭제',
    subtitle: folderName,
    contents: '',
    placeholder: '',
    isRed: true,
    button: '삭제하기',
  };
  return <ModalBasic item={item} onClickOutside={onClickOutside} />;
};

export { DeleteFolder };
