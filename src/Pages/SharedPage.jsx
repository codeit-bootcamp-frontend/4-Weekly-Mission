import Header from "../components/Header";
import LinkList from "../components/LinkList";
import SearchBar from "../components/SearchBar";

const FOLDER_USER = '/sample/folder'

function SharedPage() {
  return (
    <>
      <Header query={FOLDER_USER}/>
      <SearchBar />
      <LinkList query={FOLDER_USER}/>
    </>
  )
}

export default SharedPage;