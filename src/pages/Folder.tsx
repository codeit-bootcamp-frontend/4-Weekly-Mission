import AddLink from "../components/folder/AddLink";
import LinkSearch from "../components/LinkSearch";
import Navbar from "../components/Navbar";
import "./Folder.css";
import FolderLinkList from "../components/folder/FolderLinkList";
import Footer from "../components/Footer";
import "./Main.css";
import { useEffect, useRef, useState } from "react";

function Folder() {
  const [Folderkeywords, setFolderKeywords] = useState("");
  const [addLinkOn, setAddLinkOn] = useState(false);
  const [addLinkState, setAddLinkState] = useState(true);
  const [footerState, setFooterState] = useState(false);
  const [domNode, setDomNode] = useState<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  let AddLinkElement: HTMLDivElement;
  let footerElement: HTMLDivElement;

  function handleIntersect(entries: any, observe: any) {
    entries.forEach((entry: any) => {
      if (entry.target === AddLinkElement) {
        if (entry.isIntersecting === false) {
          setAddLinkState(false);
        } else {
          setAddLinkState(true);
        }
      }
      if (entry.target === footerElement) {
        if (entry.isIntersecting === false) {
          setFooterState(false);
        } else {
          setFooterState(true);
        }
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

  useEffect(() => {
    if (addLinkState === false && footerState === false) {
      setAddLinkOn(true);
    } else {
      setAddLinkOn(false);
    }
  }, [addLinkState, footerState]);

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
