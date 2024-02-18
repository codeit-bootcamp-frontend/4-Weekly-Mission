import { getFolderData } from "../api";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import useAsync from "../components/hooks/useAsync";

const SharedPage = () => {
  // const [name, setName] = useState("");
  // const [links, setLinks] = useState([]);
  // const [owner, setOwner] = useState({});

  //const handleLoadFolderData = async () => {
  // let folderResult;
  // try {
  //   folderResult = await getFolderData();
  // } catch (error) {
  //   console.error();
  //   return;
  // }

  // const { folder } = folderResult;
  // setName(folder.name);
  // setLinks(folder.links);
  // setOwner(folder.owner);
  const { result } = useAsync(getFolderData);
  const { folder } = result || {};
  const { name, links, owner } = folder || {};

  //console.log(links);
  //    const { email, profileImageSource } = data || {};
  //};

  // useEffect(() => {
  //   handleLoadFolderData();
  // }, []);

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
