import React from 'react';
import './Section.css';
import FolderInfo from './FolderInfo';
import LinkBar from './LinkBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SearchBar';

export default function Section({ style }) {
  return (
    <>
      <section className={style}>
        <div className="title">{style === 'sectionShared' ? <FolderInfo /> : <LinkBar />}</div>
      </section>
      <div>
        {style === 'sectionShared' ? null : (
          <>
            <SearchBar />
            <FilterBar />
          </>
        )}
      </div>
    </>
  );
}
