export async function responseFolderData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    throw new Error("response 전달 실패");
  }
  const data = await response.json();
  return data;
}

export async function responseUserData(setProfileData) {
  fetch("https://bootcamp-api.codeit.kr/api/sample/user")
    .then((response) => response.json())
    .then((data) => {
      setProfileData(data);
    })
    .catch((error) => {
      console.log("response 에러:", error);
    });
}
