import { useContext } from 'react';
import linkIcon from '../../../assets/linkIcon.svg';
import Button from '../../../components/Button';
import '../../../styles/linkAddBar.css';
import { ModalContext } from '../FolderPage';
import { ADD_TYPE } from '../../../constants/modalConstants';

/*
  폴더페이지에서 Header 컴포넌트 아래의
  링크추가 영역 컴포넌트입니다.
*/
function LinkAddBar() {
  const { handleModalOpen } = useContext(ModalContext);
  const placeholder = '링크를 추가해 보세요';

  const handleLinkAddModalOpen = (e) => {
    e.preventDefault();
    const link = document.getElementById('link-add__bar--input').value;
    handleModalOpen(ADD_TYPE, link);
  };
  return (
    <div className="link-add">
      <form className="link-add__bar" id="link-add">
        <div>
          <img
            className="link-add__bar--img"
            src={linkIcon}
            alt="linkIcon"
          ></img>
          <input
            className="link-add__bar--input"
            placeholder={placeholder}
            id="link-add__bar--input"
          ></input>
        </div>
        <Button type="submit" onClick={handleLinkAddModalOpen}>
          추가하기
        </Button>
      </form>
    </div>
  );
}
export default LinkAddBar;
