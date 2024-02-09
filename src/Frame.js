import React from 'react'
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Frame.css';
import { getFolder } from './apis/api';
import { useState, useEffect } from 'react';

const Frame = () => {
  const [totalInfo, setTotalInfo] = useState([]); // card 컴포넌트보다, frame 컴포넌트에서 전체 상태를 관리하는 것이 유리하다 판단.
  //const [isLoading, setIsLoading] = useState(false); //

  const handleLoad = async () => {
    const { folder } = await getFolder(); // folder.folder와 무슨 차이지? 객체 프로퍼티가 하나라면, 구조 분해를 해야 하나?
    const { links } =  folder;
    const total = links.map(link => ({
      imageSource: link.imageSource,
      createdAt : link.createdAt,
      title : link.title,
      description : link.description,
    }));

    console.log(total)
    setTotalInfo(total); // totalInfo에는 이미지, 시각, 제목, 서술이 모두 들어 있음.
  };

  const renderCard = (i) => {
    return <Card imgSrc={totalInfo[i].imageSource}
      time={totalInfo[i].createdAt}
      title={totalInfo[i].title}
      description={totalInfo[i].description}
    />;
  }

  useEffect(() => {
    handleLoad();
  }, [])

  return (
    <div className='frame_ly'>
      < SearchBar className='search-bar_ly'/>
      <div className='card-frame_ly'>
        <div className='card-flex-frame_ly'>
          {renderCard(0)}
          {renderCard(1)}
          {renderCard(2)}
        </div>
        <div className='card-flex-frame_ly'>
          {renderCard(3)}
          {renderCard(4)}
          {renderCard(5)}
        </div>
        <div className='card-flex-frame_ly'>
          {renderCard(6)}
          {renderCard(7)}
          {renderCard(8)}
        </div>
      </div>
    </div>
  )
}

export default Frame;