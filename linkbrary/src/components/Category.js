import { styled } from "styled-components";
import { useState } from "react";
import { getAPI } from "../APIUtil";
import useGetJson from "./useGetJson";
import unionImgSrc from "../assets/Union.svg";

function Category({ changeTitle, changeID }) {
  const getFolderList = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/users/1/folders"
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const listsData = useGetJson(getFolderList);
  const lists = listsData?.data || [];
  if (lists[0]) {
    lists[0].name === "전체" || lists.unshift({ id: 0, name: "전체" });
  }

  const initialButtonColors = lists.reduce((colors, list) => {
    colors[list.name] = "#fff";
    return colors;
  }, {});

  const [buttonColors, setButtonColors] = useState(initialButtonColors);

  const handleClick = async (name, id) => {
    changeTitle(name);
    changeID(id);
    setButtonColors((prevColors) => {
      return {
        ...initialButtonColors,
        [name]: prevColors[name] === "#fff" ? "#6D6AFE" : "#fff",
      };
    });
  };

  return (
    <Container>
      <ButtonDiv>
        {lists.map((val, idx) => (
          <Button
            key={val.id}
            onClick={() => handleClick(val.name, val.id)}
            color={buttonColors[val.name]}
            id={val.name}
          >
            {val.name}
          </Button>
        ))}
      </ButtonDiv>
      <AddFolderDiv>
        <AddFolder>폴더 추가</AddFolder>
        <img src={unionImgSrc} alt="unionIcon" />
      </AddFolderDiv>
    </Container>
  );
}

const Container = styled.div`
  width: 1080px;
  margin: 0px auto;
  display: flex;
  padding: 8px 12px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
    padding: 0px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  gap: 12px 8px;
`;

const Button = styled.button`
  min-width: max-content;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: ${({ color = "#fff" }) => color || "#fff"};
  color: ${({ color = "#fff" }) => (color === "#fff" ? "#000000" : "#FFFFFF")};
`;

const AddFolderDiv = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: row;

  @media (max-width: 774px) {
    display: none;
  }
`;

const AddFolder = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  margin-right: 4px;
`;

export default Category;
