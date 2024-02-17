import { API_BASE_URL } from "./constant";

export const getUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sample/user`);
    if (response.ok) {
      return response.json();
    }
    return new Error("유저를 불러올 수 없습니다."); // 예상 가능한 에러
  } catch (e) {
    // 예상 불가능한 에러 처리
    if (e instanceof Error) {
      return e;
    }
  }
};

export const getFolder = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sample/folder`);
    if (response.ok) {
      return response.json();
    }
    return new Error("폴더를 불러올 수 없습니다."); // 예상 가능한 에러
  } catch (e) {
    // 예상 불가능한 에러 처리
    if (e instanceof Error) {
      return e;
    }
  }
};
