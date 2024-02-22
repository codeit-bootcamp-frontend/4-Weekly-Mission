import classNames from 'classnames';
import { useState } from 'react';

import FloatingAddFolderButton from 'components/Common/FlaotingAddFolderButton';
import Footer from 'components/Footer/Footer';
import FolderHeaderContent from 'components/Header/FolderHeaderContent';
import Header from 'components/Header/Header';
import CardList from 'components/Main/CardList';
import Main from 'components/Main/Main';
import SearchBar from 'components/Main/SearchBar';
import SortingSection from 'components/Main/SortingSection';

import styles from 'pages/FolderPage/FolderPage.module.css';

function Folder() {
  const ALL = { id: 0, name: '전체' };
  const [selectedFolder, setSelectedFolder] = useState(ALL);

  const floatingAddFolderButtonClasses = classNames(
    styles['floating-add-folder-button'],
    'position-fixed',
    'visible-flex-mobile-only',
    'z-top'
  );
  const containerClasses = classNames('min-height-100vh');

  return (
    <div>
      <div className={containerClasses}>
        <Header>
          <FolderHeaderContent />
        </Header>
        <Main>
          <SearchBar />
          <SortingSection selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
          <CardList folderId={selectedFolder.id} />
          <FloatingAddFolderButton className={floatingAddFolderButtonClasses} />
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default Folder;
