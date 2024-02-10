export const fetchRequest = async (url, method, data) => {
  try {
    const res = await fetch(`${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,
    });

    return res;
  } catch (e) {
    throw Error(e);
  }
};
