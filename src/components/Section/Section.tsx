import React from 'react';
import './Section.css';
import FolderInfo from './FolderInfo';
import LinkBar from './LinkBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SearchBar';
import type { HeaderProps } from '../Header/Header';

export default function Section({ style }: HeaderProps) {
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
