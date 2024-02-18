import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  // 임시 샘플 데이터
  const user = {
    id: 1,
    name: "코드잇",
    email: "codeit@codeit.com",
    profileImageSource:
      "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
