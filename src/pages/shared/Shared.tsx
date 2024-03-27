import SearchInput from "../../components/form/SearchInput";
import SharedContents from "./SharedContents";
import Header from "../../components/common/Header";
import UserTitle from "./UserTitle";
import { useRecoilState } from "recoil";
import { searchContents } from "../../store/store";
import { useEffect, useState } from "react";
import { getUser } from "../../apis/apiShared";

function Shared() {
  const [basicData, setBasicData] = useState([]);
  const [contents, setContents]: any = useRecoilState(searchContents);
  useEffect(() => {
    getUser().then((data) => {
      setBasicData(data.links);
      setContents(data.links);
    });
  }, []);
  return (
    <>
      <Header fixed={true} />
      <UserTitle />
      <main>
        <div className="container">
          <SearchInput contents={basicData} />
          <SharedContents contents={contents} />
        </div>
      </main>
    </>
  );
}
export default Shared;
