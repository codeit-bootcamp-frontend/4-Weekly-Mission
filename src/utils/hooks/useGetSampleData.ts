const API = process.env.REACT_APP_API;

export const fetchGetSampleFolders = async () => {
  try {
    const response = await fetch(`${API}/sample/folder`);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchGetSampleUsers = async (userId: number) => {
  try {
    const response = await fetch(`${API}/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
