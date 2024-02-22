import classNames from 'classnames';
import PropTypes from 'prop-types';

import useFetch from 'hooks/useFetch';

import ErrorMessage from 'components/Common/ErrorMessage';
import Card from 'components/Main/Card';
import styles from 'components/Main/CardList.module.css';

import { getAllLinksApiUrl, getOtherLinksApiUrl } from 'services/api';

// folder id를 props로 받아서 api 적용할 것
function CardList({ folderId }) {
  const LOADING_MESSAGE = 'Loading...';
  const ALL_ID = 'all';

  const url = folderId === ALL_ID ? getAllLinksApiUrl() : getOtherLinksApiUrl(folderId);
  const { data, loading, error } = useFetch(url);

  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const linkList = data?.data ?? [];

  const cardListClasses = classNames(styles['card-list'], styles.grid, 'grid', 'width-full');
  const noCardListTextBoxClasses = classNames(
    styles['no-card-list-text-box'],
    'flex-row',
    'align-center',
    'justify-center'
  );

  return (
    <div>
      {linkList.length > 0 ? (
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
      ) : (
        <p className={noCardListTextBoxClasses}>저장된 링크가 없습니다</p>
      )}
    </div>
  );
}

CardList.propTypes = {
  folderId: PropTypes.string,
};

CardList.defaultProps = {
  folderId: '',
};

export default CardList;
