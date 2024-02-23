import { GridTemplate } from 'styles/commonStyle';
import { useEffect, useState } from 'react';

import sampleAPI from 'api/sampleAPI';

import PageTitle from 'components/common/PageTitle';
import ShareHeader from 'components/share/ShareHeader';
import MainLayout from 'components/template/MainLayout';
import Card from 'components/common/card/Card';

function LinkSharePage() {
  const [folderData, setFolderData] = useState(null);

  const fetchFolderData = async () => {
    try {
      const res = await sampleAPI.getSampleFolderInfo();
      const folderData = res.data.folder;

      setFolderData(folderData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFolderData();
  }, []);

  return (
    <>
      <PageTitle title="링크 공유" />
      <ShareHeader folderData={folderData} />
      <MainLayout>
        <GridTemplate>
          {folderData?.links.map((link) => (
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
