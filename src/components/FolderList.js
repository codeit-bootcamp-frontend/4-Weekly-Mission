import React from "react";
import Card from "./Card";
import SearchIcon from '../assets/search.svg';

function FolderList({ folderList }) {
  console.log('FolderList', folderList);
  return (
    <section>
      <div>
        <img src={SearchIcon} alt="검색아이콘"></img>
        <input type="text" placeholder="링크를 검색해보세요" />
      </div>
      <ul>
        {folderList.map(({id, url, imageSource, description, createdAt}) => {
          return (
            <li key={id}>
              <Card url={url} imgUrl={imageSource} desc={description} createdAt={createdAt}/>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FolderList;