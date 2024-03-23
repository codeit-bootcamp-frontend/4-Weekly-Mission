import React from 'react';
import './Section.css';
import FolderInfo from './FolderInfo';
import LinkBar from './LinkBar';

export default function Section({ style }) {
  return (
    <section className={style}>
      <div className="title">{style === 'sectionShared' ? <FolderInfo /> : <LinkBar />}</div>
    </section>
  );
}
