import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './CardList.module.css';
import Card from './Card';
import { getFolderInfo } from '../../services/api';
import ErrorMessage from '../Common/ErrorMessage';

function CardList() {
  // links를 배열에 순차적으로 저장
  const [links, setLinks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchFolderInfo = async () => {
    try {
      const { folder } = await getFolderInfo();
      setLinks(folder.links);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchFolderInfo();
  }, []);

  const cardListClasses = classNames(styles['card-list'], styles.grid, 'grid', 'width-full');

  return (
    <div className={cardListClasses}>
      {links.map((link) => (
        <Card
          key={link.id}
          createdAt={link.createdAt}
          url={link.url}
          description={link.description}
          imageSource={link.imageSource}
        />
      ))}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

export default CardList;
