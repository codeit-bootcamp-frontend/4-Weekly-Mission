export const copyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("복사 성공!");
  } catch (err) {
    console.error(err);
  }
};
