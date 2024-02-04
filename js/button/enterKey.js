export function handleEnterKey(e, action) {
  let pressedKey = e.key;
  if (pressedKey === 'Enter') {
    e.preventDefault();
    action();
  }
}