import AddLinkInput from "../../components/AddLinkInput/AddLinkInput";
import { Header } from "../../components/Header";

export default function FolderPage() {
  const headerPosition = {
    position: "relative",
  };
  return (
    <>
      <Header headerPosition={headerPosition} />
      <AddLinkInput />
    </>
  );
}
