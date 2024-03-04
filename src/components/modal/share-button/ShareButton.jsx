import styled from "styled-components";

/**
 *
 * @description 폴더 공유 모달에 쓰이는 버튼
 * @todo 카카오톡, 페이스북 버튼 클릭 시 접속 가능한 주소를 SNS 공유 가능하게 하기
 */
const ShareButton = () => {
  const copyTextToClipboard = () => {
    const url = "공유용 링크";

    navigator.clipboard.writeText(url);
  };

  return (
    <Container>
      <div className="section">
        <div className="kakao">
          <img src="/assets/folder/kakao.svg" alt="카카오톡" />
        </div>
        <p className="text">카카오톡</p>
      </div>
      <div className="section">
        <div className="facebook">
          <img src="/assets/folder/facebook.svg" alt="페이스북" />
        </div>
        <p className="text">페이스북</p>
      </div>
      <div className="section" onClick={copyTextToClipboard}>
        <div className="link">
          <img src="/assets/folder/link.svg" alt="링크 복사" />
        </div>
        <p className="text">링크 복사</p>
      </div>
    </Container>
  );
};

export default ShareButton;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .section {
    display: flex;
    flex-direction: column;
    .text {
      color: var(--Linkbrary-gray100, #373740);
      text-align: center;
      font-family: Inter;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.9375rem; /* 115.385% */
    }
    .kakao {
      width: 2.625rem;
      height: 2.625rem;

      border-radius: 2.33331rem;
      background: #fee500;

      display: flex;
      padding: 0.75rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
    }
    .facebook {
      width: 2.625rem;
      height: 2.625rem;

      border-radius: 2.33331rem;
      background: #1877f2;

      display: flex;
      padding: 0.75rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
    }
    .link {
      width: 2.625rem;
      height: 2.625rem;

      border-radius: 2.33331rem;
      background: rgba(157, 157, 157, 0.04);

      display: flex;
      padding: 0.75rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
    }
  }
`;
