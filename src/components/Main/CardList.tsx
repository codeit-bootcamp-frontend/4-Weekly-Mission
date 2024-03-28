import classNames from 'classnames';
import { useContext } from 'react';

import useFetch from 'hooks/useFetch';

import ErrorMessage from 'components/Common/ErrorMessage';
import Card from 'components/Main/Card';
import styles from 'components/Main/CardList.module.css';

import { InputStateContext } from 'context/InputStateProvider';

import { LINKS_API_URL, LINKS_FOLDER_ID_API_URL, LinksApiResponse } from 'services/api';

interface CardListProps {
  folderId?: number;
}

function CardList({ folderId = 0 }: CardListProps) {
  const LOADING_MESSAGE = 'Loading...';
  const ALL = { id: 0, name: '전체' };

  const url = folderId === ALL.id ? LINKS_API_URL : LINKS_FOLDER_ID_API_URL(folderId);
  const { data, loading, error } = useFetch<LinksApiResponse>(url);

  const { inputState } = useContext(InputStateContext);

  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const linkList = data?.data ?? [];
  const linkCount = linkList?.length ?? 0;

  const cardListClasses = classNames(styles['card-list'], styles.grid, 'grid', 'width-full');
  const noCardListTextBoxClasses = classNames(
    styles['no-card-list-text-box'],
    'flex-row',
    'align-center',
    'justify-center'
  );

  return (
    <div>
      {linkCount > 0 ? (
        <div className={cardListClasses}>
          {linkList
            .filter(
              (link) =>
                link.title?.includes(inputState) ||
                link.description?.includes(inputState) ||
                link.url.includes(inputState)
            )
            .map((link) => (
              <Card key={link.id} linkData={link} />
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

export default CardList;
