import noImg from '../assets/no-image-link.png';
import '../styles/LinkList.css';
import { useEffect, useState } from 'react';
import { getFolder } from '../services/api';
import { dateParse, diffDate } from '../utils/date';

function LinkList() {
  const [linkList, setLinkList] = useState([]);

  const apiGetFolder = async () => {
    try {
      const { folder } = await getFolder();
      const { links } = folder;
      setLinkList([...links]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiGetFolder();
  }, []);
  return (
    <div id="link-list">
      <div className="link-grid-box">
        {linkList.map((item, index) => {
          return (
            <div className="link-grid-item" key={item.id}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="item-img">
                  <img src={item.imageSource ? item.imageSource : noImg} alt="no-img" />
                </div>
                <div className="item-info">
                  <div className="date-diff">{diffDate(dateParse(item.createdAt))}</div>
                  <div className="item-context">{item.title}</div>
                  <div className="item-date">{dateParse(item.createdAt)}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LinkList;
