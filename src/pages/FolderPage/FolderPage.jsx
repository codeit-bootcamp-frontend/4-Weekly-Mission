import AddLinkInput from "../../components/AddLinkInput/AddLinkInput";
import CardListBox from "../../components/CardListBox/CardListBox";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer/Footer";

export default function FolderPage() {
  const headerPosition = {
    position: "relative",
  };
  return (
    <>
      <Header headerPosition={headerPosition} />
      <AddLinkInput />
      <CardListBox />
      <Footer />
    </>
  );
}
