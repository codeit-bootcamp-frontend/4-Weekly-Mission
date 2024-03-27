import useFetch from "utils/hooks/useFetch"

export const useGetFolders = (userId: number) => {
    return useFetch(`${process.env.REACT_APP_API}/users/${userId}/folders`)
}