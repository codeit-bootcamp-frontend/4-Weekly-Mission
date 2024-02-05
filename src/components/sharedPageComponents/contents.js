import React from 'react';
import Card from './card';
import search from '../../assets/Images/Search.png';
/*eslint-disable*/
export default function Contents({ links }) {
  return (
    <article>
      <input
        className="card-search"
        placeholder="링크를 검색해 보세요"
        type="search"
      ></input>
      <img src={search} alt="search" className="card-search-icon"></img>
      <div className="content-wrapper">
        {links && links.map((el) => <Card link={el} key={el.id}></Card>)}
      </div>
    </article>
  );
}
