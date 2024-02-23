import CatagoryBtns from "./CatagoryBtns";
import styled from "styled-components";
import share from "../assets/share.svg";
import pen from "../assets/pen.svg";
import trash from "../assets/trash.svg";

const ContainDiv = styled.div`
  display: flex;
  width: 325px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;

  p {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
    margin: 0px;
  }

  @media ${(props) => props.theme.tabletS} {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: auto;
    margin-bottom: 24px;

    p {
      font-size: 24px;
    }
  }

  @media ${(props) => props.theme.tabletL} {
    width: 1060px;
`;

const OptionDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

function FolderName({ folder }) {
  return (
    <ContainDiv>
      <p>{folder?.name ? folder?.name : "전체"}</p>
      {folder?.name ? (
        <OptionDiv>
          <Button>
            <img src={share} />
            <p>공유</p>
          </Button>
          <Button>
            <img src={pen} />
            <p>이름 변경</p>
          </Button>
          <Button>
            <img src={trash} />
            <p>삭제</p>
          </Button>
        </OptionDiv>
      ) : null}
    </ContainDiv>
  );
}

function FoldersCatagory({ data, headFolder, onClick }) {
  return (
    <>
      <CatagoryBtns data={data} onClick={onClick} />
      <FolderName folder={headFolder} />
    </>
  );
}

export default FoldersCatagory;
