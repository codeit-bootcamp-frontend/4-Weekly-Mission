import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function Searchbar() {
  return (
    <section>
      <input placeholder={<CiSearch />} />
      <CiSearch />
    </section>
  );
}
