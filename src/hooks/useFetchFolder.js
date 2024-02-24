import { useState, useEffect } from 'react';

import { getFolderList, getLink } from '../apis/api';

export const useFetchFolder = () => {
  const [folderList, setFolderList] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchFolderList = async () => {
      const { data } = await getFolderList();

      setFolderList(data);
    };

    fetchFolderList();
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data } = await getLink();

      setLinks(data);
    };

    fetchLinks();
  }, []);

  return [folderList, links, setLinks];
}