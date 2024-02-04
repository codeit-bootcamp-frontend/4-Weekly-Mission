export default async function userAuth(userInputList, path) {
  try {
    const URL = "https://bootcamp-api.codeit.kr";
    const res = await fetch(URL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInputList),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    return false;
  }
}
