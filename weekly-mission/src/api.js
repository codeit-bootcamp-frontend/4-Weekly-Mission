export async function requestProfileData() {
    try {
        const response = await fetch(' https://bootcamp-api.codeit.kr/api/sample/user');
        const profileData = await response.json();
        if (profileData !== undefined) {
            return profileData;
        }
    }catch(err){
        console.log('서버 요청 중 문제가 발생하였습니다.')
    }
 
}
 

export async function requestFolderInformation(){
    try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
        const folderData = await response.json();
     
        return folderData.folder;
    }catch(err){
        console.log('서버 요청 중 문제가 발생하였습니다')
    }
}
