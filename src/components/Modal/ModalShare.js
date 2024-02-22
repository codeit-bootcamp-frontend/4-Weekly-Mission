import kakao from "../../assets/kakao.svg";
import facebook from "../../assets/facebook.svg";
import link from "../../assets/linkIconModal.svg";
import ModalContainer from "./ModalContainer";

const ModalShare = ({ isOpen, onClose, selectedFolderName }) => {
  const shareContent = (
    <>
      <h2>폴더 공유</h2>
      <p>{selectedFolderName}</p>
      <div className="socialButtonContainer">
        <div>
          <img src={kakao} alt="kakao" />
          카카오톡
        </div>
        <div>
          <img src={facebook} alt="facebook" />
          페이스북
        </div>
        <div>
          <img src={link} alt="link" />
          링크 복사
        </div>
      </div>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={shareContent} />
  );
};
export default ModalShare;
