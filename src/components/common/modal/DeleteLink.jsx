import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';
import Title from './title/Title';

const DeleteLink = ({ link, handleCloseModal }) => (
  <Frame handleCloseModal={handleCloseModal}>
    <Title title="링크 삭제" content={link} />
    <SubmitButton className="red" content="삭제하기" />
  </Frame>
);

export default DeleteLink;
