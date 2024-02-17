import AddLinkBar from 'components/AddLinkBar';
import PLACEHOLDER from 'constants/FORM_MESSAGE';
import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 100vw;
    padding-top: 5.3rem;
    margin-bottom: 4rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
  `,

  InnerWrap: styled.div`
    width: 100%;
    padding: 6rem 42rem 9rem; // 레이아웃 수정해서 변경필요
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
