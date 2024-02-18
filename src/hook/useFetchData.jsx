import { getCategory, getFolderLink } from 'api/folderAPI';
import { sampleFolderInquire, getUser } from 'api/sampleAPI';
import { useQuery } from 'react-query';

export const useUserQuery = () => {
  return useQuery('user', getUser);
};

/**
 * shared 폴더 정보 불러오는 useQuery 함수
 * @param {string} queryKey
 * @param {function} selectFunction 데이터 가공 함수
 * @returns {Object}
 */
export const useSampleFolderQuery = (queryKey, selectFunction) => {
  return useQuery(['sampleFolder', queryKey], sampleFolderInquire, {
    select: selectFunction,
  });
};

export const useFolderQuery = ({ queryKey, folderId }) => {
  return useQuery(['folder', queryKey], () => {
    return getFolderLink(folderId);
  });
};
export const useCategoryQuery = (queryKey, userId) => {
  return useQuery(['folder', queryKey], () => {
    return getCategory(userId);
  });
};
