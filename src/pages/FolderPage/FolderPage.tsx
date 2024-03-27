import { CSSProperties, useRef } from "react";
import { Header } from "@components/Header";
import AddLinkInput from "@components/AddLinkInput/AddLinkInput";
import CardListBox from "@components/CardListBox/CardListBox";
import Footer from "@components/Footer/Footer";
import styles from "./FolderPage.module.scss";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function FolderPage() {
  const headerPosition: CSSProperties = {
    position: "relative",
  };

  const addLinkInputRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const isAddLinkInputVisible = useIntersectionObserver({
    targetRef: addLinkInputRef,
  });
  const isFooterVisible = useIntersectionObserver({ targetRef: footerRef });

  const addLinkInputStyle: CSSProperties =
    isAddLinkInputVisible || isFooterVisible
      ? {
          visibility: "hidden",
        }
      : {};

  return (
    <>
      <Header headerPosition={headerPosition} />
      <div className={styles.staticAddLinkInput} ref={addLinkInputRef}>
        <AddLinkInput />
      </div>
      <CardListBox />
      <div className={styles.fixdAddLinkInput} style={addLinkInputStyle}>
        <AddLinkInput />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}
