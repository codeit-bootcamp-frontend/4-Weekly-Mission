import { styled } from 'styled-components';

import PLACEHOLDER from 'constants/FORM_MESSAGE';
import AddLinkBar from 'components/AddLinkBar';

const Styled = {
  Container: styled.div`
    width: 100vw;
    position: relative;

    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
  `,

  InnerWrap: styled.div`
    width: 100%;
    padding: 6rem calc((100vw - 80rem) / 2 + 2rem) 9rem;

    @media (min-width: 768px) and (max-width: 1199px) {
      padding: 6rem 3.2rem 9rem;
    }
    @media (max-width: 767px) {
      padding: 2.4rem 3.2rem 4rem;
    }
  `,
};

function FolderHeader() {
  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <AddLinkBar placeholder={PLACEHOLDER.ADD_LINK} />
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default FolderHeader;
