export const fetchRequest = async (url, method, data) => {
  const res = await fetch(`${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  });
  return res;
};
