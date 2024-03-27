import { KeyboardEvent } from 'react';

const handleEnterKeyDown = (event: KeyboardEvent, callback: () => void) => {
  if (event.key !== 'Enter') return;
  callback?.();
};

export default handleEnterKeyDown;
