import Banner from "components/folder/Banner";
import SearchBar from "components/common/SearchBar";
import FolderCategoryList from "components/folder/FolderCategoryList";
import FolderTitle from "components/folder/FolderTitle";
import FolderCardList from "components/folder/FolderCardList";
import Footer from "components/common/Footer";
import styled from "styled-components";
import FolderAddButton from "components/folder/FolderAddButton";
import FolderOption from "components/folder/FolderOption";
import SearchResultTitle from "components/folder/SearchResultTitle";

const Section = styled.section`
  max-width: 1060px;
  background-color: var(--color-white);
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 1124px) {
    max-width: 700px;
  }

  @media (max-width: 767px) {
    max-width: 340px;
  }
`;

function Folder() {
  return (
    <>
      <Banner />
      <Section>
        <SearchBar />
        <SearchResultTitle />
      </Section>
      <Section>
        <FolderCategoryList />
        <FolderAddButton />
      </Section>
      <Section>
        <FolderTitle />
        <FolderOption />
      </Section>
      <Section>
        <FolderCardList />
      </Section>
      <Footer />
    </>
  );
}

export default Folder;
