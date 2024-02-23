import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AddLinkBar from "../components/AddLinkBar";
import SearchBar from "../components/SearchBar";
import FoldersMain from "../components/FoldersMain";
import FloatingBtn from "../components/FloatingBtn";

const ContainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const StaticNavBar = styled(NavBar)`
  position: static;
  top: 0;
  z-index: 0;
`;

const ContainLinkBarDiv = styled.div`
  display: flex;
  padding: 24px 32px 40px 32px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: var(--Linkbrary-bg, #f0f6ff);
  margin-bottom: 20px;

  @media ${(props) => props.theme.tabletS} {
    padding: 60px 32.5px 90px 32.5px;
    margin-bottom: 40px;
  }

  @media ${(props) => props.theme.desktop} {
    padding: 60px 320px 90px 320px;
  }
`;

const MainSection = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  min-height: 100vh;

  @media ${(props) => props.theme.tabletS} {
    width: 704px;
    gap: 40px;
  }

  @media ${(props) => props.theme.tabletL} {
    width: 1060px;
  }

  @media ${(props) => props.theme.desktop} {
    margin-bottom: 40px;
  }
`;

function FolderPage() {
  return (
    <ContainDiv>
      <StaticNavBar />
      <ContainLinkBarDiv>
        <AddLinkBar />
      </ContainLinkBarDiv>
      <MainSection>
        <SearchBar />
        <FoldersMain />
      </MainSection>
      <FloatingBtn />
      <Footer />
    </ContainDiv>
  );
}

export default FolderPage;
