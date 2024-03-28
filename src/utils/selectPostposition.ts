export default function selectParticle(word: string) {
  // 한글의 유니코드 범위 내에서 마지막 글자의 코드를 계산합니다.
  const lastChar = word.charCodeAt(word.length - 1);
  // 한글 유니코드 시작점: 44032, 한글 자음과 모음의 조합 개수: 28
  const isJongSungExist = (lastChar - 44032) % 28;

  // 받침이 있으면 '으로', 없으면 '로'를 반환합니다.
  return isJongSungExist === 0 ? '로' : '으로';
}
