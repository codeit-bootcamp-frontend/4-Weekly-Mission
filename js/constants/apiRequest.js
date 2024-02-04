export const POST_API = async (apiUrl, data) => {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // const result = JSON.parse(await response.text());

  return response;
};
