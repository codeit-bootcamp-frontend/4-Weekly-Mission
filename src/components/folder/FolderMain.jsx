import Card from "../common/Cards";
import { SearchBar } from "../common/SearchBar";
import { CardControl } from "./CardControl";

function Sorting() {}

export function FolderMain() {
  return (
    <>
      <SearchBar></SearchBar>
      <Sorting></Sorting>
      <CardControl></CardControl>
      <Card></Card>
    </>
  );
}
