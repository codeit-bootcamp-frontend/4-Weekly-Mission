import SearchInput from "../../components/form/SearchInput";
import SharedContents from "./SharedContents";
import Header from "../../components/common/Header";
import UserTitle from "./UserTitle";

function Shared() {
  return (
    <>
      <Header fixed={true} />
      <UserTitle />
      <main>
        <div className="container">
          <SearchInput />
          <SharedContents />
        </div>
      </main>
    </>
  );
}
export default Shared;
