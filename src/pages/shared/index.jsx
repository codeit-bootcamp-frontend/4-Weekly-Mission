import { useEffect, useState } from 'react';
import { get } from '../../apis/api';
import Header from './header/Header';
import Content from './Content/Content';

const Shared = () => {
  const [sampleFolder, setSampleFolder] = useState({});
  useEffect(() => {
    get('/sample/folder').then((data) => setSampleFolder(data.folder));
  }, []);

  return (
    <>
      <Header sampleUserFolder={sampleFolder} />
      <Content sampleFolderLink={sampleFolder?.links} />
    </>
  );
};
export default Shared;
