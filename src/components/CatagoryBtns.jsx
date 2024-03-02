import styled from "styled-components";
import add from "../assets/addblue.svg";

const Button = styled.button`
  display: inline-flex;
  padding: 6px 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
  }

  &:active {
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-primary-color, #6d6afe);
    color: #fff;
  }

  @media ${(props) => props.theme.tabletS} {
    padding: 8px 12px;
    font-size: 16px;
  }
`;

const Div = styled.div`
  display: none;
  align-items: center;
  gap: 4px;

  p {
    color: #6d6afe;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
    white-space: nowrap;
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media ${(props) => props.theme.tabletS} {
    display: flex;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  gap: 12px 8px;
  margin: 0px;
  padding: 0px;
`;

const ContainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 28px;

  @media ${(props) => props.theme.tabletS} {
    margin-bottom: 24px;
  }
`;

function CatagoryBtn({ name, onClick, folder }) {
  const handleFolderBtnClick = () => {
    const nextFolder = { ...folder };
    onClick(nextFolder);
  };

  return (
    <Button folder={folder} onClick={handleFolderBtnClick}>
      {name}
    </Button>
  );
}

function CatagoryBtns({ data, onClick }) {
  return (
    <ContainDiv>
      <Ul>
        <li>
          <CatagoryBtn onClick={onClick} folder={{}} name="전체" />
        </li>
        {data &&
          data.map((folder) => (
            <li key={folder?.id}>
              <CatagoryBtn
                folder={folder}
                onClick={onClick}
                name={folder?.name}
              />
            </li>
          ))}
      </Ul>
      <Div>
        <p>폴더 추가</p>
        <img src={add} />
      </Div>
    </ContainDiv>
  );
}

export default CatagoryBtns;
