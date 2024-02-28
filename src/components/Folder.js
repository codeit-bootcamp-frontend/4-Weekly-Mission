import Header from './Header';
import Footer from './Footer';
import '../css/Reset.css';
import '../css/Global.css';
import '../css/Folder.css';
import React, { useState, useEffect } from 'react';
import ShareAPI from './share/ShareAPI';
import CountDate from './share/CountDate';
import { Link } from 'react-router-dom';

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
            <img src='img/link.svg' alt='link 이미지'></img>
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
            <div className='cardnav'>
              <div className='buttonlist'>
                <button>전체</button>
                <button>⭐️ 즐겨찾기</button>
                <button>코딩 팁</button>
                <button>채용 사이트</button>
                <button>유용한 글</button>
                <button>나만의 장소</button>
              </div>
              <Link to='FolderAddModal'>
              <div className='folderadd'>
                <p>폴더추가</p>
                <img src='/img/add.svg' alt='plus'></img>
              </div>
              </Link>
            </div>
          <div className='title'>
            <h1>유용한 글</h1>
            <div className='option'>
              <Link to='ShareModal'>
              <div>
                <img src='/img/share.svg' alt='공유'></img>
                <p>공유</p>
              </div>
              </Link>
              <Link to='EditModal'>
              <div>
                <img src='/img/pen.svg' alt='변경'></img>
                <p>이름 변경</p>
              </div>
              </Link>
              <Link to='FolderDeleteModal'>
              <div>
                <img src='/img/Group 36.svg' alt='삭제'></img>
                <p>삭제</p>
              </div>
              </Link>
            </div>
          </div>
        <div className='cardbar'>
          {CardContents()}
        </div>
      </div>
    </div>
    <footer><Footer/></footer>
    </>
  );
}
export default Folder;