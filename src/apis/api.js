import axios from "axios";

export const PROFILE_DATA = async () => {
  try {
    const response = await axios.get(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    return response;
  } catch (error) {
    console.error("프로필 데이터 에러", error);
    return null;
  }
};
