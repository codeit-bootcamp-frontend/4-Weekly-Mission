import AddLink from "../components/folder/AddLink";
import LinkSearch from "../components/LinkSearch";
import Navbar from "../components/Navbar";
import "./Folder.css";
import FolderLinkList from "../components/folder/FolderLinkList";
import Footer from "../components/Footer";
import "./Main.css";
import { useRef, useState } from "react";

function Folder() {
  const [Folderkeywords, setFolderKeywords] = useState("");
  const [addLinkOn, setAddLinkOn] = useState(false);
  const [domNode, setDomNode] = useState<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  let AddLinkElement: HTMLDivElement;
  let footerElement: HTMLDivElement;

  function handleIntersect(entries: any, observe: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting === false) {
        setAddLinkOn(true);
      } else {
        setAddLinkOn(false);
      }
    });
  }

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(footerElement);
    observer.observe(AddLinkElement);
  }

  window.addEventListener(
    "load",
    (event) => {
      if (domNode !== null && footerRef.current !== null) {
        AddLinkElement = domNode;
        footerElement = footerRef.current;
        createObserver();
      }
    },
    false
  );

  return (
    <>
      <Navbar />
      <div className="add-link-background">
        <AddLink setDomNode={setDomNode} />
      </div>
      <div className="link-search-card-list">
        <LinkSearch setKeywords={setFolderKeywords} />
        <FolderLinkList keywords={Folderkeywords} />
      </div>
      {addLinkOn && (
        <div className="add-link-background-bottom">
          <AddLink setDomNode={setDomNode} />
        </div>
      )}
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default Folder;
