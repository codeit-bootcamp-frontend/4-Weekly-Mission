import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './CardList.module.css';
import Card from './Card';
import { getLinksInfo } from '../../services/api';
import ErrorMessage from '../Common/ErrorMessage';

// folder id를 props로 받아서 api 적용할 것
function CardList() {
  // links를 배열에 순차적으로 저장
  const [links, setLinks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchLinksInfo = async () => {
    try {
      const folder = await getLinksInfo();
      setLinks(folder.data);
      console.log('링크스1');
      console.log(links[0]);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchLinksInfo();
  }, []);

  const cardListClasses = classNames(styles['card-list'], styles.grid, 'grid', 'width-full');

  return (
    <div className={cardListClasses}>
      {links.map((link) => (
        <Card
          key={link.id}
          createdAt={link.created_at}
          url={link.url}
          description={link.description}
          imageSource={link.image_source}
        />
      ))}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default CardList;
