/* Common Utility Logic */

//인풋이 비어있는지 검사
function isTextEmpty(inputValue) {
  if (inputValue === "") {
    return true;
  }

  return false;
}

/********************
 * EXPORT
 ********************/

export { isTextEmpty };
