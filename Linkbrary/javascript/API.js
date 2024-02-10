async function POST_API(url, data){
  const response = await fetch(url, {
    method : "POST",
    headers :{"Content-Type": "application/json"},
    body : JSON.stringify(data)
  });
  const jsonData = await response.json();
  return jsonData;
}
