import * as S from "../ModalLoader.style";
import * as SS from "./ModalShareSubFolder.style";
import shareKakao from "src/Utils/KakaoTalkShare";

// Types
import { ModalDataShareSubFolder } from "src/@types/ModalFunctionDataTypes";

/**
 *
 * @param {string} modalData 링크 string을 받아 모달에 표시해줌과 동시에 공유 링크를 생성하는 모달입니다.
 * @returns
 */
export default function ModalShareSubFolder({
  modalData,
}: ModalDataShareSubFolder) {
  const BASE_URL = "https://animated-kitten-84730c.netlify.app";
  const query = `/shared/${modalData[1]}`;

  const onClickFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + BASE_URL + query
    );
  };

  const handleCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(BASE_URL + query);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };

  return (
    <>
      <S.ModalTitle>
        폴더 공유
        <br />
        <S.ModalCaption>{modalData[0]}</S.ModalCaption>
      </S.ModalTitle>
      <SS.ModalBox>
        <SS.ShareButtonWrapper>
          <SS.ShareTypeButton
            onClick={() => {
              shareKakao(BASE_URL, query);
            }}
            $shareType={"kakao"}
          >
            <img src="Kakao.svg" alt={"linkToKakao"} />
          </SS.ShareTypeButton>
          카카오톡
        </SS.ShareButtonWrapper>
        <SS.ShareButtonWrapper>
          <SS.ShareTypeButton
            onClick={() => onClickFacebook()}
            $shareType="facebook"
          >
            <img src="Facebook.svg" alt={"linkToFacebook"} />
          </SS.ShareTypeButton>
          페이스북
        </SS.ShareButtonWrapper>
        <SS.ShareButtonWrapper>
          <SS.ShareTypeButton
            onClick={() => handleCopyToClipboard()}
            $shareType="link"
          >
            <img src="link.svg" alt={"linkCopy"} />
          </SS.ShareTypeButton>
          링크 복사
        </SS.ShareButtonWrapper>
      </SS.ModalBox>
    </>
  );
}
