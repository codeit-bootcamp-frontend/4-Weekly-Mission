import styled from 'styled-components';
import check from '../image/check.svg';
const Container = styled.div`
  display: flex;
  padding: 8px;
  align-items: ${(props) => (props.isChecked ? 'center' : 'flex-start')};
  justify-content: space-between;
  width: 280px;
  border-radius: 8px;
  background-color: ${(props) => (props.isChecked ? '#F0F6FF' : '#FFFFFF')};
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const LinkName = styled.span`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const LinkCount = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Check = styled.img`
  width: 14px;
  height: 14px;
  display: ${(props) => (props.isChecked ? 'block' : 'none')};
`;

function List({ linkName, linkCount, onClick, isChecked = false }) {
  return (
    <Container isChecked={isChecked} onClick={onClick}>
      <LinkContainer>
        <LinkName>{linkName}</LinkName>
        <LinkCount>{linkCount}개 링크</LinkCount>
      </LinkContainer>
      <Check src={check} isChecked={isChecked} />
    </Container>
  );
}

export default List;
