import React from 'react';
import Card from './card';
import search from '../../assets/Images/Search.png';

export default function Contents({ links }) {
  return (
    <article>
      <form>
        <input
          className="card-search"
          placeholder="링크를 검색해 보세요"
          type="search"
        ></input>
        <button type="submit" className="card-search-button">
          <img
            src={search}
            alt="search"
            className="card-search-icon"
            width="16"
            height="16"
          ></img>
        </button>
      </form>
      <div className="content-wrapper">
        {links && links.map((el) => <Card link={el} key={el.id}></Card>)}
      </div>
    </article>
  );
}
