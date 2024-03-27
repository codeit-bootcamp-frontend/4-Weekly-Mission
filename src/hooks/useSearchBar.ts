import { useState, ChangeEvent } from "react";
//types
import { LinksData, Link } from "../types/commonTypes";

export function useSearchBar(
  initialValue: string,
  linksData: LinksData[] | Link[]
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  LinksData[] | Link[],
  () => void
] {
  const [searchVal, setSearchVal] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleClickClose = () => {
    setSearchVal("");
  };

  if (searchVal === "")
    return [searchVal, handleChange, linksData, handleClickClose];
  //타입 단언
  const filteredData =
    "created_at" in linksData
      ? (linksData as LinksData[]).filter(
          (links) =>
            links.description?.includes(searchVal) ||
            links.title?.includes(searchVal) ||
            links.url?.includes(searchVal)
        )
      : (linksData as Link[]).filter(
          (links) =>
            links.description?.includes(searchVal) ||
            links.title?.includes(searchVal) ||
            links.url?.includes(searchVal)
        );

  return [searchVal, handleChange, filteredData, handleClickClose];
}
