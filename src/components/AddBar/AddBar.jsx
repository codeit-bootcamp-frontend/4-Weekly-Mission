import * as S from './AddBar.styles.js';

const AddBar = () => {
  return (
    <S.AddBarColorBox>
      <S.AddBarLineLink />
      <S.AddBarInput placeholder='링크를 추가 해보세요' />
      <S.AddBarButton>추가하기</S.AddBarButton>
    </S.AddBarColorBox>
  );
};

export default AddBar;
