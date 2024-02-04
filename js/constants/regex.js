export const REGEX = Object.freeze({
  EMAIL: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
});
