import { useState } from "react";
import GNB from "../../components/gnb/GNB";
import SearchLinkBar from "./components/search-link-bar/SearchLinkBar";
import styled from "styled-components";
import Content from "./components/content/Content";
import Footer from "../../components/footer/Footer";

const Folder = () => {
  const [user, setUser] = useState(null);
  return (
    <Container>
      <GNB user={user} />
      <SearchLinkBar />
      <Content />
      <Footer />
    </Container>
  );
};

export default Folder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
