import FolderProfile from "../components/FolderProfile";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import { getShared } from "../api";
import useFetch from "../components/hooks/useFetch";
import Loading from "../components/Loading";
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

function SharedPage() {
  const sharedApi = useFetch(() => getShared());
  const links = sharedApi.data?.folder?.links;

  return (
    <ContainDiv>
      {sharedApi.status === "fetching" && <Loading size="medium" />}
      {sharedApi.status === "success" && (
        <FolderProfile ownerProfile={sharedApi.data} />
      )}
      {sharedApi.status === "error" && <p>{sharedApi.error.message}</p>}
      <MainSectionDiv>
        <SearchBar />
        {sharedApi.status === "fetching" && <Loading size="large" />}
        {sharedApi.status === "success" && <Cards links={links} />}
        {sharedApi.status === "error" && <p>{sharedApi.error.message}</p>}
      </MainSectionDiv>
    </ContainDiv>
  );
}

export default SharedPage;
