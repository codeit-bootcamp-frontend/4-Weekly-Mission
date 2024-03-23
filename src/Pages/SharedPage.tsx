import Header from "../components/Header";
import LinkList from "../components/LinkList";
import SearchBar from "../components/SearchBar";


function SharedPage() {
  return (
    <>
      <Header />
      <SearchBar />
      <LinkList id={0}/>
    </>
  )
}

export default SharedPage;