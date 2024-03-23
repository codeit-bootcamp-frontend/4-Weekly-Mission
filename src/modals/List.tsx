import styled from "styled-components";
import check from "../image/check.svg";

interface StyledProps {
  $isChecked: boolean;
}

const Container = styled.div<StyledProps>`
  display: flex;
  padding: 8px;
  align-items: ${({ $isChecked }) => ($isChecked ? "center" : "flex-start")};
  justify-content: space-between;
  width: 280px;
  border-radius: 8px;
  background-color: ${({ $isChecked }) => ($isChecked ? "#F0F6FF" : "#FFFFFF")};
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
const Check = styled.img<StyledProps>`
  width: 14px;
  height: 14px;
  display: ${({ $isChecked }) => ($isChecked ? "block" : "none")};
`;

interface Props {
  id: number;
  linkName: string;
  linkCount?: number;
  onClick: (id: number | null) => void;
  isChecked: boolean;
}

function List({ id, linkName, linkCount, onClick, isChecked = false }: Props) {
  return (
    <Container $isChecked={isChecked} onClick={() => onClick(id)}>
      <LinkContainer>
        <LinkName>{linkName}</LinkName>
        <LinkCount>{linkCount}개 링크</LinkCount>
      </LinkContainer>
      <Check src={check} $isChecked={isChecked} />
    </Container>
  );
}

export default List;
