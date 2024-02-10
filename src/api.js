export async function fetchProfile() {
  const res = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`);
  if (!res.ok) {
    throw new Error("cannot download profile info");
  }
  const body = await res.json();
  return body;
}
