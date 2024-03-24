import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';
import Title from './title/Title';

interface DeleteLinkProps {
  link: string;
  onCloseModal: () => void;
}

const DeleteLink = ({ link, onCloseModal }: DeleteLinkProps) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title="링크 삭제" content={link} />
    <SubmitButton className="red" content="삭제하기" />
  </Frame>
);

export default DeleteLink;
