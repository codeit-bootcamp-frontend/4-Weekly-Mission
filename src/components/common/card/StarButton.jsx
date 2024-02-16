import { styled } from 'styled-components';

import filledStar from 'assets/icon/filledStar.svg';
import emptystar from 'assets/icon/emptyStar.svg';

const Styled = {
  Container: styled.button`
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function StarButton({ isActive, ...htmlDivProps }) {
  const src = isActive ? filledStar : emptystar;

  return (
    <Styled.Container {...htmlDivProps} onClick={(e) => e.preventDefault()}>
      <img src={src} alt="찜 버튼" />
    </Styled.Container>
  );
}

export default StarButton;
