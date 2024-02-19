import Card from "../common/Cards";
import { SearchBar } from "../common/SearchBar";

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
