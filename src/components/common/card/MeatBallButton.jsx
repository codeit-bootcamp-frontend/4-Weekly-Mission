import { styled } from 'styled-components';
import meatballIcon from 'assets/icon/meatballsIcon.svg';

const Styled = {
  Container: styled.button`
    width: 2.1rem;
    height: 1.7rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function MeatBallButton() {
  // 추후 onClick으로 기능 생성
  return (
    <Styled.Container type="button">
      <img src={meatballIcon} alt="더보기 버튼" />
    </Styled.Container>
  );
}

export default MeatBallButton;
