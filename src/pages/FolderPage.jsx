import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AddLinkBar from "../components/AddLinkBar";
import SearchBar from "../components/SearchBar";

const StaticNavBar = styled(NavBar)`
  position: static;
  top: 0;
  z-index: 0;
`;

function FolderPage() {
  return (
    <>
      <StaticNavBar />
      <AddLinkBar />
      <SearchBar />
      <Footer />
    </>
  );
}

export default FolderPage;
