import Footer from "components/FolderPage/Footer/Footer";
import Header from "components/FolderPage/Header/Header";
import Main from "components/FolderPage/Main/Main";
import Nav from "components/FolderPage/Nav/Nav";
import { GetUserFolder, GetLinks } from "api/GetUserFolder";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Folder() {
  const [search, setSerch] = useState("");
  const [folderListInfo, setFolderListInfo] = useState([]);
  const [selectedName, setSelectedName] = useState("전체");
  const [selectedId, setSelectedId] = useState();
  const [linkDatas, setLinkDatas] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedModal, setSelectedModal] = useState("");
  const [searchInputInvisible, setSearchInputInvisible] = useState(false);
  const [inView, setInView] = useState(false);
  const [headerInView, setHeaderInView] = useState(true);
  const footerRef = useRef();
  const headerRef = useRef();

  const filtered = links.filter(
    (link) =>
      (link?.title && link.title.includes(search)) ||
      (link?.url && link.url.includes(search)) ||
      (link?.description && link.description.includes(search))
  );

  const handleSearchChange = (e) => {
    setSerch(e.target.value);
  };

  const handleCloseClick = (e) => {
    setSerch("");
  };

  const handleSelectedFolder = ({ name, id }) => {
    setSelectedId(id);
    setSelectedName(name);
  };

  const loadFolderListInfo = async (info) => {
    try {
      const folders = await GetUserFolder(info);
      setFolderListInfo(folders.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadLinks = async (info) => {
    try {
      const links = await GetLinks(info);
      setLinks(links.data);
    } catch (error) {
      console.error(error);
    }
  };

  const setModal = (value) => {
    setSelectedModal(value);
  };

  const observeHeader = () => {
    setSearchInputInvisible(true);
  };

  // const ModalOverlay = styled.div`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(
  //     0,
  //     0,
  //     0,
  //     0.7
  //   ); /* Semi-transparent black background */
  //   display: ${selectedModal
  //     ? "flex"
  //     : "none"}; /* Show if selectedModal is truthy */
  //   justify-content: center;
  //   align-items: center;
  //   justify-content: center;
  //   align-items: center;
  //   z-index: 10;
  // `;

  useEffect(() => {
    loadFolderListInfo({ userId: 4 });
    loadLinks({ userId: 4, folderId: selectedId });
  }, [selectedId, selectedModal]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Footer가 화면에 절반 이상 보일 때 감지
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    }, options);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // Footer가 화면에 절반 이상 보일 때 감지
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setHeaderInView(false);
        } else {
          setHeaderInView(true);
        }
      });
    }, options);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <>
      <Nav />
      <Header headerInView={headerInView} inView={inView} />
      <div ref={headerRef}></div>
      <Main
        search={search}
        folderListInfo={folderListInfo}
        selectedId={selectedId}
        selectedName={selectedName}
        links={filtered}
        selectedModal={selectedModal}
        onSelectedFolder={handleSelectedFolder}
        handleSearchChange={handleSearchChange}
        setModal={setModal}
        handleCloseClick={handleCloseClick}
      />
      <div ref={footerRef}></div>
      <Footer />
    </>
  );
}

export default Folder;
