import "./AddLink.css";
import link from "../../assets/link.png";
import { useEffect, useRef, useState } from "react";
interface Props {
  setIsShowModal?: (modalState: {
    linkModal: boolean;
    folderAddModal: boolean;
  }) => void;
}

const AddLink: React.FC<Props> = ({ setIsShowModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const linkAddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (linkAddRef.current) {
      observer.observe(linkAddRef.current);
    }

    return () => {
      if (linkAddRef.current) {
        observer.unobserve(linkAddRef.current);
      }
    };
  }, []);
  const showLinkAddModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setIsShowModal) {
      setIsShowModal({ linkModal: true, folderAddModal: false });
    }
  };
  return (
    <div className="link-add-container" ref={linkAddRef}>
      <form className={`link-add-form ${isVisible ? "visible" : "hidden"}`}>
        <label>
          <img className="link-icon" src={link} alt="링크 아이콘" />
          <input className="link-add-input" />
          <button className="add-btn" onClick={showLinkAddModal}>
            추가하기
          </button>
        </label>
      </form>
    </div>
  );
};
export default AddLink;
