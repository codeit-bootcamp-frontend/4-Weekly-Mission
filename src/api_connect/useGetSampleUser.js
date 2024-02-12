import useAsync from '../util/useAsync';
import axios from 'axios';

export const useGetSampleUser = () => {
    const getProfileData = () => axios.get("https://bootcamp-api.codeit.kr/api/sample/user")
    const { pending, error, data } = useAsync(getProfileData);

    return { pending, error, data };
};