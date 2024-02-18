export async function getUser() {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sample/folder`);
        if(response.ok) {
            const body = await response.json();
            return body.folder;
        }
    } catch(error) {
        console.error(error);
    }
}

export async function fetchUserData () {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sample/user`);
        if (response.ok) {
            const userProfileData = await response.json();
            return userProfileData;
        }
    } catch (error) {
        console.error(error);
    }
};