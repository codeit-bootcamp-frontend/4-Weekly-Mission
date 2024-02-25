async function ShareAPI(url){
  const response = await fetch(url, {
    method : "GET",
    headers :{"Content-Type": "application/json"}
  });
  const jsonData = await response.json();
  return jsonData;
}

export default ShareAPI;