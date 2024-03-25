import { CSSProperties, useEffect, useRef, useState } from "react";
import { Header } from "@components/Header";
import AddLinkInput from "@components/AddLinkInput/AddLinkInput";
import CardListBox from "@components/CardListBox/CardListBox";
import Footer from "@components/Footer/Footer";
import styles from "./FolderPage.module.scss";

export default function FolderPage() {
  const headerPosition: CSSProperties = {
    position: "relative",
  };

  // 작업중
  const [isAddLinkInputVisible, setIsAddLinkInputVisible] = useState(false);
  const addLinkInputRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const addLinkInputStyle: CSSProperties = isAddLinkInputVisible
    ? {
        visibility: "hidden",
      }
    : {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAddLinkInputVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (addLinkInputRef.current && footerRef.current) {
      observer.observe(addLinkInputRef.current);
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
