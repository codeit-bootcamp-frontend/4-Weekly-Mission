import { useEffect, useState } from 'react';
import '../css/LinkList.css';
import { getUserInfo } from '../api';

// 날짜가 정수로 떨어지도록 만들어주는 함수.
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function diffTime(value) {
  const now = new Date();
  const date = new Date(value);
  const diff = now - date;
  const min = Math.floor(diff/1000/60);
  const hour = Math.floor(diff/1000/60/60);
  const day = Math.floor(diff/1000/60/60/24);
  const month = Math.floor(diff/1000/60/60/24/30);

  const result = min < 2 ? '1 minute ago'
  : min < 60 ? `${min} minutes ago`
  : min === 60 ? '1 hour ago'
  : hour <= 23 ? `${hour} hours ago`
  : hour === 24 ? '1 day ago'
  : day <= 30 ? `${day} days ago`
  : day === 31 ? '1 month ago'
  : month <= 11 ? `${month} months ago`
  : month === 12 ? '1 year ago'
  : `${Math.floor(month/12)} years ago`;

  return result
}

function GetCard({item}) {
  return (
    <a href={item.url} target='_blank' rel='noreferrer'>
    <div className="card" key={item.id}>
      <div className="previewImg" style={{ backgroundImage: `url(${item.imageSource})`}} />
      <div className="link-content">
        <p className="update-time">{diffTime(item.createdAt)}</p>
        <p className="link-description">{item.description}</p>
        <p className="link-created-date">{formatDate(item.createdAt)}</p>
      </div>
    </div>
    </a>
  )
}

function LinkList() {
  const [folderData, setFolderData] = useState([]);

  const getFolderData = async (path) => {
    const result = await getUserInfo(path);
    
    if (!result) return;

    setFolderData(result.folder.links);
  }

  useEffect(() => {
    getFolderData('folder');
  }, [])

  return (
    <div className="content">
      <form>
        <div className='search-icon'></div>
        <input name="search" placeholder='링크를 검색해 보세요.' />
      </form>
      <div className="items">
        {folderData.map((item) => {
          return (
            <GetCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default LinkList;