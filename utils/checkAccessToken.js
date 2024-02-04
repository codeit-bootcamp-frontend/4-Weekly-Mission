export default function checkAccessToken() {
  const ACCESS_TOKEN = localStorage.getItem("accessToken");
  if (ACCESS_TOKEN) window.location.replace("/folder");
}
