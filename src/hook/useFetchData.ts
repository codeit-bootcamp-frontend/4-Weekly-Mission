import { getCategory, getFolderLink } from 'api/folderAPI';
import { sampleFolderInquire, getUser } from 'api/sampleAPI';
import { useQuery } from 'react-query';

export const useUserQuery = () => {
  return useQuery('user', getUser);
};

/**
 * shared 폴더 정보 불러오는 useQuery 함수
 * @param {string} queryKey
 * @returns {Object}
 */
export const useSampleFolderQuery = (queryKey: string) => {
  return useQuery(['sampleFolder', queryKey], sampleFolderInquire);
};

/**
 * folder 데이터 불러오는 훅
 * @param {Object} props
 * @param {string} props.queryKey
 * @param {number} props.folderId
 * @returns {QueryResult}
 */
export const useFolderQuery = ({
  queryKey,
  folderId,
}: {
  queryKey: string;
  folderId: 'all' | string;
}) => {
  return useQuery(['folder', queryKey], () => {
    return getFolderLink(folderId);
  });
};

/**
 * 카테고리 목록 데이터 쿼리 훅
 * @param {string} queryKey
 * @param {number} userId
 * @returns {QueryResult}
 */
export const useCategoryQuery = (queryKey: string, userId: number) => {
  return useQuery(['folder', queryKey], () => {
    return getCategory(userId);
  });
};
