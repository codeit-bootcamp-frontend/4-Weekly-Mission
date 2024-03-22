const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('✅클립보드에 링크가 복사되었습니다!');
  } catch (err) {
    alert('‼️클립보드에 링크 복사를 실패했습니다!');
  }
};

export default copyToClipboard;
