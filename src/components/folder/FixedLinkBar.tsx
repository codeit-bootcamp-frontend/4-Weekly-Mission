import AddLinkBar from 'components/AddLinkBar';
import PLACEHOLDER from 'constants/FORM_MESSAGE';
import React from 'react';
import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;

    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
  `,

  InnerWrap: styled.div`
    width: 100%;
    padding: 2.4rem calc((100vw - 80rem) / 2 + 3.2rem);

    @media (max-width: 767px) {
      padding: 1.6rem 3.2rem;
    }
  `,
};

function FixedLinkBar() {
  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <AddLinkBar placeholder={PLACEHOLDER.ADD_LINK} />
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default FixedLinkBar;
