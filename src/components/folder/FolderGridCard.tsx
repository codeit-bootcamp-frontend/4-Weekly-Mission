import { styled } from 'styled-components';
import { GridTemplate } from 'styles/commonStyle';
import useUserLinksQuery from 'hooks/api/link/useUserLinksQuery';
import useUserSpecipicLinkQuery from 'hooks/api/link/useUserSpecipicLinkQuery';

import Card from 'components/common/card/Card';
import { UserLinksData } from 'interfaces/dataInterface';

const Styled = {
  NoLink: styled.div`
    height: 10rem;
    margin-top: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function FolderGridCard({ selectedFolder }: { selectedFolder: number }) {
  let queryHook;
  selectedFolder === 1 ? (queryHook = useUserLinksQuery) : (queryHook = useUserSpecipicLinkQuery);

  const { data } = queryHook({ userId: 1, folderId: selectedFolder });
  const folderData: UserLinksData[] = data?.data?.data || [];
  const hasLinks = folderData.length !== 0;

  return (
    <>
      {!hasLinks ? (
        <Styled.NoLink>해당 폴더에 저장된 링크가 없습니다 🥲</Styled.NoLink>
      ) : (
        <GridTemplate>
          {folderData.map((data) => (
            <Card
              key={data.id}
              createdAt={data.created_at}
              url={data.url}
              description={data.description}
              imageSource={data.image_source}
            />
          ))}
        </GridTemplate>
      )}
    </>
  );
}

export default FolderGridCard;
