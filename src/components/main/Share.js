import React, { useState, useEffect } from 'react';
import ShareAPI from './share/ShareAPI';

function Share() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ShareAPI('https://bootcamp-api.codeit.kr/api/sample/folder');
      setFolderData(data); // 데이터를 상태에 저장
    }
    
    fetchData();
  }, []); // 빈 배열을 넘겨주어 컴포넌트가 마운트될 때 한 번만 실행
  console.log(folderData);

  const CardContents = () =>{
    const result = [];
    if(folderData){ // null이 아닐때 for가 돌게
      for(let i=0; i < folderData.folder.links.length; i++){
        let time = folderData.folder.links[i].createdAt.slice(0,10).replace('-','.').replace('-','.')
        let now = new Date();
        result.push(
        <div className='card' key={i}>
        <img src={folderData.folder.links[i].url}></img>;
        <p>{(now.getFullYear() - time.split('.')[0])*12*30+ (now.getMonth() - time.split('.')[1])*30 + (now.getDate() - time.split('.')[2])}</p>
        <p>{folderData.folder.links[i].description}</p>;
        <p>{time}</p>;
        </div>)
      }
    }
    return result
  }

  return (
    <div className='share'>
      {folderData && ( // 초기값이 있나 확인
        <div className='info'>
          <img className='owner_img' src={folderData.folder.owner.profileImageSource}></img>
          <p className='owner_name'>{folderData.folder.owner.name}</p>
          <p className='bookmark'>{folderData.folder.name}</p>
        </div>
      )}
      {folderData && ( // 초기값이 있나 확인
        <div className='cardList'>
          {CardContents()};
        </div>
      )}
    </div>
  );
}
export default Share;