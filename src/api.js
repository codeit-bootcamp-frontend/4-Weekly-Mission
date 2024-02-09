const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample';

export async function getUser(){
    const response = await fetch(`${BASE_URL}/user`);
    const body = await response.json();
    return body;
}
export async function getFolder(){
    const response = await fetch(`${BASE_URL}/folder`);
    const body = await response.json();
    return body;
}