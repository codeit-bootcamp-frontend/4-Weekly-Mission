const togglePassword = e => {
  e.target.classList.toggle('on');
  e.target.previousElementSibling.type = e.target.classList.contains('on') ? 'text' : 'password';
};

export default togglePassword;
