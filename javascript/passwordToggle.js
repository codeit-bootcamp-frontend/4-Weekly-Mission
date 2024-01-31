const passwordToggle = (value) => {
  const inputType = value.type === 'password' ? 'text' : 'password'
  value.type = inputType
}

export { passwordToggle }