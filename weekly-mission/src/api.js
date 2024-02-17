import axios from "axios";
import { SERVER_URL } from "./constant";

export async function requestProfileData() {
    try {
        const response = await fetch(`${SERVER_URL}/sample/user`);
        const profileData = await response.json();
        if (profileData !== undefined) {
            return profileData;
        }
    } catch (err) {
        console.log('서버 요청 중 문제가 발생하였습니다.')
    }

}


export async function requestOwnerInformation() {
    try {
        const response = await fetch(`${SERVER_URL}/sample/folder`);
        const ownerData = await response.json();

        return ownerData.folder;
    } catch (err) {
        console.log('서버 요청 중 문제가 발생하였습니다')
    }
}


export async function requestFolderListData() {
    try{
        const response = await axios.get(`${SERVER_URL}/users/1/folders`);
        const data = response.data;
        return data;
    }catch(e){
        console.log('서버 요청 중 문제가 발생했습니다.');
    }
}

export async function requestFolderLinkData (id) {
    const folderId = id === 'all' ? null : +id;
    try{
        const response = folderId !== null ? 
            await axios.get(`${SERVER_URL}/users/1/links?folderid=${folderId}`) :
            await axios.get(`${SERVER_URL}/users/1/links`);
        const data = response.data;
        return data;
    }catch (e){
        console.log('서버 요청 중 문제가 발생했습니다.');
    }
}