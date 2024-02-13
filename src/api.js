const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

export async function fetchSampleProfile() {
  const res = await fetch(`${BASE_URL}sample/user`);
  if (!res.ok) {
    throw new Error("cannot download profile info");
  }
  const body = await res.json();
  return body;
}

export async function fetchSampleFolder() {
  const res = await fetch(`${BASE_URL}sample/folder`);
  if (!res.ok) {
    throw new Error("cannot download links");
  }
  const body = await res.json();
  return body.folder;
}
