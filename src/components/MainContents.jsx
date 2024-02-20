import FolderProfile from "./FolderProfile";
import useAsync from "./hooks/useAsync";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { getFolder } from "../api";
import useFetch from "./hooks/useFetch";
import Loading from "./Loading";
import styled from "styled-components";

const ContainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${(props) => [props.theme.tabletS]} {
    gap: 40px;
  }
`;

const MainSectionDiv = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media ${(props) => [props.theme.tabletS]} {
    gap: 40px;
    width: 704px;
  }
  @media ${(props) => [props.theme.tabletL]} {
    width: 1060px;
  }
`;

export default function MainContents() {
  const folderApi = useFetch(() => getFolder());
  const links = folderApi.data?.folder?.links;

  return (
    <ContainDiv>
      {folderApi.status === "fetching" && <Loading size="medium" />}
      {folderApi.status === "success" && (
        <FolderProfile ownerProfile={folderApi.data} />
      )}
      {folderApi.status === "error" && <p>{folderApi.error.message}</p>}
      <MainSectionDiv>
        <SearchBar />
        {folderApi.status === "fetching" && <Loading size="large" />}
        {folderApi.status === "success" && <Cards links={links} />}
        {folderApi.status === "error" && <p>{folderApi.error.message}</p>}
      </MainSectionDiv>
    </ContainDiv>
  );
}
