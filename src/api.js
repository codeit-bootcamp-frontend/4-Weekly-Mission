const API_URL = 'https://bootcamp-api.codeit.kr';

export async function fetchProfileData() {
  try {
    const response = await fetch(`${API_URL}/api/sample/user`);
    if (!response.ok) {
      throw new Error('Failed to fetch profile data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return null;
  }
}

export const fetchFolderData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/sample/folder`);
    if (!response.ok) {
      throw new Error('Failed to fetch folder data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching folder data:', error);
    return null;
  }
};
