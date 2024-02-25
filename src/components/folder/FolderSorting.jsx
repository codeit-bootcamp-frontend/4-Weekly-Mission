import { useEffect, useState } from "react";
import { getUserFolder } from "../../api";
import styled from "styled-components";
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;
const SortBtn = styled.button`
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
`;
const SortBtnWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;
const FoldAddBtn = styled.button`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;
function FolderSorting() {
  const [sortData, setSortData] = useState([]);

  const fetchUserFolder = async () => {
    try {
      const jsonData = await getUserFolder();
      const userFolders = jsonData.data;
      setSortData(userFolders);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserFolder();
  }, []);

  return (
    <Container>
      <SortBtnWarpper>
        <SortBtn>전체</SortBtn>
        {sortData.map((data) => {
          return <SortBtn>{data.name}</SortBtn>;
        })}
      </SortBtnWarpper>
      <FoldAddBtn>폴더 추가 +</FoldAddBtn>
    </Container>
  );
}

export default FolderSorting;
