import { HiOutlineLink } from 'react-icons/hi';
import * as S from './AddBar.styles.js';

const AddBar = () => {
  return (
    <S.AddBarDiv>
      <S.AddBarLineLink />
      <S.AddBarInput placeholder='링크를 추가 해보세요' />
    </S.AddBarDiv>
  );
};

export default AddBar;
