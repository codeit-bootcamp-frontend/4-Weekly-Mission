import Header from './Header';
import Footer from './Footer';
import '../css/Reset.css';
import '../css/Global.css';
import '../css/Folder.css';
import React, { useState, useEffect } from 'react';
import ShareAPI from './share/ShareAPI';
import CountDate from './share/CountDate';

function Folder(){
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ShareAPI('https://bootcamp-api.codeit.kr/api/sample/folder');
      setFolderData(data); // 데이터를 상태에 저장
    }
    
    fetchData();
  }, []); // 빈 배열을 넘겨주어 컴포넌트가 마운트될 때 한 번만 실행

  const CardContents = () =>{ // 카드 목록에 값이 1개씩 들어가게하기 위해 만든 함수
    const result = [];
    if(folderData){ // null이 아닐때 for가 돌게
      for(let i=0; i < folderData.folder.links.length; i++){
        let time = new Date(folderData.folder.links[i].createdAt) // 게시물 만든 시간
        result.push(
        <div className='card' key={i}>
          <img src={folderData.folder.links[i].imageSource} alt='카드 이미지'></img>
          <div className='description'>
            <p>{CountDate(time)}</p>
            <p>{folderData.folder.links[i].title}</p>
            <p>{folderData.folder.links[i].description}</p>
            <p>{`${time.getFullYear()}.${time.getMonth()+1}.${time.getDate()}` }</p>
          </div>
        </div>)
      }
    }
    return result
  }

  return(
  <>
    <header><Header/></header>
    <div className='folder'>
      <div className='info'>
        <div className='addbar'>
          <div className='link'>
            <img src='img/link.svg'></img>
            <input placeholder='링크를 추가해 보세요'></input>
          </div>
          <button>추가하기</button>
        </div>
      </div>
      <div className='cardList'>
        <div className='searchbar'>
            <img src='/img/Search.svg' alt='검색이미지'></img>
            <input type='text' placeholder='링크를 검색해 보세요.'></input>
          </div>
            <div className='cardbar'>
              {CardContents()};
            </div>
      </div>
    </div>
    <footer><Footer/></footer>
    </>
  );
}
export default Folder;