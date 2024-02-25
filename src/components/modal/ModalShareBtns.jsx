import kakaoBtn from "../../img/kakaoModalBtn.svg";
import facebookBtn from "../../img/facebookModalBtn.svg";
import shareBtn from "../../img/shareModalBtn.svg";

function ModalShareBtns() {
  return (
    <div>
      <div>
        <img src={kakaoBtn} alt="kakaoButton" />
        <p>카카오톡</p>
      </div>
      <div>
        <img src={facebookBtn} alt="facebookButton" />
        <p>페이스북</p>
      </div>
      <div>
        <img src={shareBtn} alt="shareButton" />
        <p>링크복사</p>
      </div>
    </div>
  );
}

export default ModalShareBtns;
