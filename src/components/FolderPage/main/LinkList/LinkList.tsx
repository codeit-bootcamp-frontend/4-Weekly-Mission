/* eslint-disable */

import { useEffect, useState } from 'react';
import FolderPageLinkItem from '../FolderPageLinkItem/FolderPageLinkItem';
import styles from './LinkList.module.css';
import { Dispatch, SetStateAction } from 'react';
interface LinkListProps {
  folderId: string;
  handleAddLinkInFolderModalClick: (
    e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>
  ) => void;
  setSharedUrl: Dispatch<SetStateAction<string>>;
}

interface FolderDesc {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: '네이버';
  description: string;
  image_source: string;
  folder_id: number;
}

interface FolderIdData {
  data: FolderDesc[];
}
function LinkList({
  folderId,
  handleAddLinkInFolderModalClick,
  setSharedUrl,
}: LinkListProps) {
  const [filterData, setFilterData] = useState<FolderIdData | null>(null);

  async function handleFilterClick() {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/3/links${folderId}`)
      .then((res) => res.json())
      .then((result) => setFilterData(result));
  }

  useEffect(() => {
    handleFilterClick();
  }, [folderId]);

  return (
    <div>
      {filterData?.data?.length === 0 ? (
        <div className={styles.no_link_wrapper}>저장된 링크가 없습니다</div>
      ) : (
        <div className={styles.item_card_grid}>
          {filterData?.data?.map(
            ({ image_source, description, created_at, url }, i) => {
              return (
                <div>
                  <FolderPageLinkItem
                    description={description}
                    image_source={image_source}
                    created_at={created_at}
                    url={url}
                    key={i}
                    handleAddLinkInFolderModalClick={
                      handleAddLinkInFolderModalClick
                    }
                    setSharedUrl={setSharedUrl}
                  />
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default LinkList;
