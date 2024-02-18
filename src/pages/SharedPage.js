import { getFolderData } from "../api";
import Header from "../components/Shared/Header";
import SearchBar from "../components/common/SearchBar";
import CardList from "../components/Shared/CardList";
import useAsync from "../components/hooks/useAsync";

const SharedPage = () => {
  const { result } = useAsync(getFolderData);
  const { folder } = result || {};
  const { name, links, owner } = folder || {};

  return (
    <>
      <Header name={name} owner={owner} />
      <main>
        <SearchBar />
        {links ? <CardList links={links} /> : null}
      </main>
    </>
  );
};
export default SharedPage;
