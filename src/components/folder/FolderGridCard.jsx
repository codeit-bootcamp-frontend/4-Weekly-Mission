import { GridTemplate } from 'styles/commonStyle';
import useUserLinksQuery from 'hooks/api/link/useUserLinksQuery';
import useUserSpecipicLinkQuery from 'hooks/api/link/useUserSpecipicLinkQuery';

import Card from 'components/common/card/Card';

function FolderGridCard({ selectedFolder }) {
  let queryHook;
  selectedFolder === 1 ? (queryHook = useUserLinksQuery) : (queryHook = useUserSpecipicLinkQuery);

  const { data } = queryHook({ userId: 1, folderId: selectedFolder });
  const folderData = data?.data?.data || [];

  return (
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
  );
}

export default FolderGridCard;
