import { useEffect, useState } from 'react';
import { getSampleFolder } from '../../apis/api';
import Header from './header/Header';
import Content from './Content/Content';

const Shared = () => {
  const [sampleFolder, setSampleFolder] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderData = await getSampleFolder();

        setSampleFolder(folderData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header sampleUserFolder={sampleFolder} />
      <Content sampleFolderLink={sampleFolder?.links} />
    </>
  );
};
export default Shared;
