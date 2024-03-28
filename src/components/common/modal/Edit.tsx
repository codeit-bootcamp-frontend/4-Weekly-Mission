import { ModalBasic } from './ModalBasic';

interface Props {
  folderName: string;
  onClickOutside: (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
const EditFolder: React.FC<Props> = ({ folderName, onClickOutside }) => {
  const item = {
    title: '폴더 이름 변경',
    subtitle: '',
    contents: 'edit',
    placeholder: folderName,
    isRed: false,
    button: '변경하기',
  };
  return <ModalBasic item={item} onClickOutside={onClickOutside} />;
};

export { EditFolder };
