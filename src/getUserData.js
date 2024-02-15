import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

const getUserData = async () => {
  try {
    const userData = await baseAxios.get("sample/user");
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export default getUserData;
