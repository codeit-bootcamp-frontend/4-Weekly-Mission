export const handleClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 링크가 복사되었습니다.");
  } catch (error) {
    console.log(error);
  }
};
