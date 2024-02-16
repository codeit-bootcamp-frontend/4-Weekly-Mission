import * as S from './AddBar.styles.js';

const AddBar = () => {
  return (
    <S.AddBarColorBox>
      <S.AddBarLineLink />
      <S.AddBarInput placeholder='링크를 추가 해보세요' />
    </S.AddBarColorBox>
  );
};

export default AddBar;
