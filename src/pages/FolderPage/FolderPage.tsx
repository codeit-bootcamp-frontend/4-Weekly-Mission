import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';

import FloatingAddFolderButton from 'components/Common/FloatingAddFolderButton';
import Footer from 'components/Footer/Footer';
import AddLinkBar from 'components/Header/AddLinkBar';
import FolderHeaderContent from 'components/Header/FolderHeaderContent';
import Header from 'components/Header/Header';
import CardList from 'components/Main/CardList';
import Main from 'components/Main/Main';
import SearchBar from 'components/Main/SearchBar';
import SortingSection from 'components/Main/SortingSection';

import { InputStateContext } from 'context/InputStateProvider';
import { modalList } from 'context/Modal';

import styles from 'pages/FolderPage/FolderPage.module.css';

import selectParticle from 'utils/selectPostposition';

function Folder() {
  const ALL = { id: 0, name: '전체' };
  const [selectedFolder, setSelectedFolder] = useState(ALL);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);
  const { openModal } = useModal();
  const { inputState } = useContext(InputStateContext);

  const checkVisible = useCallback((setVisible: React.Dispatch<React.SetStateAction<boolean>>, isVisible: boolean) => {
    return () => setVisible(isVisible);
  }, []);

  const headerObservationTargetRef = useIntersectionObserver({
    callbackIn: checkVisible(setIsHeaderVisible, true),
    callbackOut: checkVisible(setIsHeaderVisible, false),
  });
  const footerObservationTargetRef = useIntersectionObserver({
    callbackIn: checkVisible(setIsFooterVisible, true),
    callbackOut: checkVisible(setIsFooterVisible, false),
  });

  const handleAddFolderButtonClick = () => {
    console.log('AddForderModal');

    const handleAddFolder = () => {
      console.log('handleAddFolder');
    };

    openModal(modalList.AddForderModal, { onSubmit: handleAddFolder });
  };

  useEffect(() => {
    if (inputState) {
      setIsSearchResultVisible(true);
    } else {
      setIsSearchResultVisible(false);
    }
  }, [inputState]);

  const searchResultTitleClasses = classNames(styles['search-result-title'], 'text-color-gray60');
  const floatingAddFolderButtonClasses = classNames(
    styles['floating-add-folder-button'],
    'position-fixed',
    'visible-flex-mobile-only',
    'z-top'
  );
  const containerClasses = classNames('min-height-100vh');
  const bottomAddLinkBarClasses = classNames(
    styles['bottom-add-link-bar'],
    'display-inline-flex',
    'position-fixed',
    'z-top',
    'background-bg',
    'width-full'
  );

  return (
    <div>
      <div className={containerClasses}>
        <div ref={headerObservationTargetRef}>
          <Header>
            <FolderHeaderContent />
          </Header>
        </div>
        <Main>
          <SearchBar />
          {isSearchResultVisible && (
            <p className={searchResultTitleClasses}>
              <span className="text-color-gray100">{inputState}</span>
              {selectParticle(inputState)} 검색한 결과입니다.
            </p>
          )}
          <SortingSection selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
          <CardList folderId={selectedFolder.id} />
          <FloatingAddFolderButton className={floatingAddFolderButtonClasses} onClick={handleAddFolderButtonClick} />
        </Main>
      </div>
      {!isHeaderVisible && !isFooterVisible && (
        <section className={bottomAddLinkBarClasses}>
          <AddLinkBar />
        </section>
      )}
      <div ref={footerObservationTargetRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Folder;
