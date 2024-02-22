import classNames from 'classnames';

import useFetch from 'hooks/useFetch';

import ErrorMessage from 'components/Common/ErrorMessage';
import Card from 'components/Main/Card';
import styles from 'components/Main/CardList.module.css';

import { getSampleFolderApiUrl } from 'services/api';

// folder id를 props로 받아서 api 적용할 것
function CardList() {
  const LOADING_MESSAGE = 'Loading...';

  const url = getSampleFolderApiUrl();
  const { data, loading, error } = useFetch(url);

  // console.log('cardlist');
  // console.log(data.folder.links);

  const linkList = data?.folder.links ?? [];

  const cardListClasses = classNames(styles['card-list'], styles.grid, 'grid', 'width-full');

  return (
    <div className={cardListClasses}>
      {linkList.map((link) => (
        <Card
          key={link.id}
          createdAt={link.created_at}
          url={link.url}
          description={link.description}
          imageSource={link.image_source}
        />
      ))}
      {loading && <ErrorMessage message={LOADING_MESSAGE} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default CardList;
