async function fetchProfileData(profileData, setProfileData) {
  try {
    const response = await fetch(
      'https://bootcamp-api.codeit.kr/api/sample/user'
    );
    if (!response.ok) {
      throw new Error('response 전달 실패');
    }
    const data = await response.json();
    setProfileData(data);
  } catch (err) {
    console.log('response 에러:', err);
  }
}

export default fetchProfileData;
