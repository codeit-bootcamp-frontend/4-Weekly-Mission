import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const StaticNavBar = styled(NavBar)`
  position: static;
  top: 0;
  z-index: 0;
`;

function FolderPage() {
  return (
    <>
      <StaticNavBar />
      <Footer />
    </>
  );
}

export default FolderPage;
