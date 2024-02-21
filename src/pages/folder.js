import styled from "styled-components";
import Footer from "../components/Common/Footer";
import Nav from "../components/Common/Nav";
import NoLink from "../components/FolderContent/NoLink";
import LinkForm from "../components/LinkForm";
import Search from "../components/Search/Search";

const Main = styled.div`
  margin: 40px 0;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const Folder = () => {
  return (
    <>
      <Nav />
      <header>
        <LinkForm />
      </header>
      <main>
        <Main>
          <Search />
          <NoLink />
        </Main>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
