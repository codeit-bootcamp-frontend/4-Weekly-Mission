import Card from "../components/common/Cards";
import { SearchBar } from "../components/common/SearchBar";

function Sorting() {}
function UsefulArticles() {}
export function FolderMain() {
  return (
    <>
      <SearchBar></SearchBar>
      <Sorting></Sorting>
      <UsefulArticles></UsefulArticles>
      <Card></Card>
    </>
  );
}
