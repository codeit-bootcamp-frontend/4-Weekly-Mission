import { useEffect, useRef, useState } from "react";
import { FolderHeader } from "../Components/FolderHeader";
import { Footer } from "../Components/Footer";
import { FolderMain } from "../Components/FolderMain";
import { getUserData } from "../APIs/FolderPageApi";
import "../styles/Page.css";
import { Profile } from "../APIs/FolderPageApi";
import AddLinkBar from "../Components/addLinkBar";

export function FolderPage() {
  const [profile, setProfile] = useState<Profile>();
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const addLinkBarTopRef = useRef<HTMLDivElement>(null);
  const addLinkBarFooterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await getUserData();
    setProfile(userData);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    };

    const handleTopIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isTopVisible) {
          console.log(entry.isIntersecting);
          entry.target.classList.add("fixedAddLinkBar");
          setIsTopVisible(false);
        } else if (entry.isIntersecting && !isTopVisible) {
          entry.target.classList.remove("fixedAddLinkBar");
          setIsTopVisible(true);
        }
      });
    };

    const isTop = new IntersectionObserver(handleTopIntersection, options);

    if (addLinkBarTopRef.current) {
      isTop.observe(addLinkBarTopRef.current);
    }

    return () => {
      if (addLinkBarTopRef.current) {
        isTop.unobserve(addLinkBarTopRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    };

    const handleFooterIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isFooterVisible) {
          entry.target.classList.remove("hideFixedAddLinkBar");
          setIsFooterVisible(false);
        } else if (entry.isIntersecting && !isFooterVisible) {
          entry.target.classList.add("hideFixedAddLinkBar");
          setIsFooterVisible(true);
        }
      });
    };

    const ioFooter = new IntersectionObserver(
      handleFooterIntersection,
      options
    );

    if (addLinkBarFooterRef.current)
      ioFooter.observe(addLinkBarFooterRef.current);

    return () => {
      if (addLinkBarFooterRef.current) {
        ioFooter.unobserve(addLinkBarFooterRef.current);
      }
    };
  }, [isFooterVisible]);

  return (
    <>
      <FolderHeader profile={profile} />

      <main>
        <div ref={addLinkBarTopRef}>
          <AddLinkBar />
        </div>
        <FolderMain />
        {/* {!isTopVisible && <AddLinkBar />} */}
      </main>

      <div ref={addLinkBarFooterRef}>
        <Footer />
      </div>
    </>
  );
}
