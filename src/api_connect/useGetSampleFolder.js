import axios from 'axios';
import useAsync from '../util/useAsync';
import processFolderData from '../util/processFolderData';

export const useGetSampleFolder = () => {
    const getUserData = () => axios.get("https://bootcamp-api.codeit.kr/api/sample/folder");
    const { pending, error, data } = useAsync(getUserData);

    const folderData = processFolderData(data?.folder);

    return { pending, error, data: folderData };
};