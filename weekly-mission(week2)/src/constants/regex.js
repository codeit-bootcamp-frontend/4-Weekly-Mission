const REGEX = Object.freeze({
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
});

export default REGEX;
