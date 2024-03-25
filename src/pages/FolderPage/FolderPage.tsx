import { CSSProperties } from "react";
import { Header } from "@components/Header";
import AddLinkInput from "@components/AddLinkInput/AddLinkInput";
import CardListBox from "@components/CardListBox/CardListBox";
import Footer from "@components/Footer/Footer";

export default function FolderPage() {
  const headerPosition: CSSProperties = {
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
