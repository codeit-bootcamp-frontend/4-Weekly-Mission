export default class KeyHandler {
  /**
   *
   * @param {KeyboardEvent} event - keyboardEvent
   * @param {Function} callback - event.key = 'Enter"일때 실행할 Fucntion
   */
  static enter = callback => {
    if (event.key === 'Enter') {
      callback();
    }
  };
}
