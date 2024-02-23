import styled from "styled-components";

const ContainDiv = styled.div`
  display: flex;
  height: 100px;
  padding: 0px 97.5px 0px 98.5px;
  justify-content: center;
  align-items: center;

  p {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 704px;
    padding: 41px 0px 35px 0px;
  }

  @media ${(props) => props.theme.desktop} {
    width: 1060px;
  }
`;

function NoLinkSection() {
  return (
    <ContainDiv>
      <p>저장된 링크가 없습니다</p>
    </ContainDiv>
  );
}

export default NoLinkSection;
