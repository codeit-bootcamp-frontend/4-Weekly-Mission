import { styled } from 'styled-components';

import filledStar from 'assets/icon/filledStar.svg';
import emptystar from 'assets/icon/emptyStar.svg';
import { HTMLAttributes } from 'react';

const Styled = {
  Container: styled.button`
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

interface StarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

function StarButton({ isActive, ...htmlButtonProps }: StarButtonProps) {
  const src = isActive ? filledStar : emptystar;

  return (
    <Styled.Container {...htmlButtonProps} onClick={(e) => e.preventDefault()}>
      <img src={src} alt="찜 버튼" />
    </Styled.Container>
  );
}

export default StarButton;
