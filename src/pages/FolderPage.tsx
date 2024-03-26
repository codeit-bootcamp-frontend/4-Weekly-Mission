import FolderList from '../components/FolderPage/FolderList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddLinkBar from '../components/FolderPage/AddLinkBar';
import SearchBar from '../components/SearchBar';
import { useEffect, useRef, useState } from 'react';

const FolderPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddLinkBarVisible, setIsAddLinkBarVisible] = useState(true);

  const addLinkBarRef = useRef(null);

  useEffect(() => {
    const current = addLinkBarRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAddLinkBarVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <div ref={addLinkBarRef}>
          <AddLinkBar />
        </div>
        <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <FolderList searchQuery={searchQuery} />
        {!isAddLinkBarVisible && <AddLinkBar />}
      </main>
      <Footer />
    </>
  );
};
export default FolderPage;
