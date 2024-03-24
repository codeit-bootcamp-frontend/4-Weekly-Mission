import { GridTemplate } from 'styles/commonStyle';

import PageTitle from 'components/common/PageTitle';
import ShareHeader from 'components/share/ShareHeader';
import MainLayout from 'components/template/MainLayout';
import Card from 'components/common/card/Card';

import useSampleFolderQuery from 'hooks/api/folder/useSampleFolderQuery';
import { Link } from 'interfaces/dataInterface';

function LinkSharePage() {
  const { data } = useSampleFolderQuery();
  const folderData = data?.data.folder;

  return (
    <>
      <PageTitle title="링크 공유" />
      <ShareHeader folderData={folderData} />
      <MainLayout>
        <GridTemplate>
          {folderData?.links.map((link: Link) => (
            <Card
              key={link.id}
              createdAt={link.createdAt}
              url={link.url}
              description={link.description}
              imageSource={link.imageSource}
            />
          ))}
        </GridTemplate>
      </MainLayout>
    </>
  );
}

export default LinkSharePage;
