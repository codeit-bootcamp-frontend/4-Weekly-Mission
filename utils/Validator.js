export function emailValid(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
