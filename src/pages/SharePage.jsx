import { GridTemplate } from 'styles/commonStyle';
import { useEffect, useState } from 'react';

import sampleAPI from 'api/sampleAPI';
import PLACEHOLDER from 'constants/FORM_MESSAGE';

import SearchBar from 'components/SearchBar';
import Card from 'components/common/card/Card';
import Header from 'components/common/header/Header';

function SharePage() {
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

  console.log(folderData);

  return (
    <>
      <Header />
      <SearchBar placeholder={PLACEHOLDER.SEARCH_LINK} style={{ marginBottom: '4rem' }} />
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
    </>
  );
}

export default SharePage;
