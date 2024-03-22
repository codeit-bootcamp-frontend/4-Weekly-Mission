import AddLinkInput from "./AddLinkInput";
import AddLinkContainer from "./AddLinkContainer";
import AddLinkButton from "./AddLinkButton";
import InputContainer from "./InputContainer";
import { useEffect, useRef, useState } from "react";
import ModalAdd from "../modal/add/ModalAdd";
import ModalPortal from "../modal/ModalPortal";
import Modal from "../modal/Modal";

function AddLink({
  footerTarget,
}: {
  footerTarget: React.RefObject<HTMLDivElement>;
}) {
  const target = useRef<HTMLDivElement>(null);
  const [isAddLinkInputHide, setIsAddLinkInputHide] = useState<boolean>(false);
  const [initialInputHide, setInitialInputHide] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState(false);
  const handleAddModal = () => setIsAdd(!isAdd);
  useEffect(() => {
    setInitialInputHide(false);
  }, []);
  useEffect(() => {
    setInitialInputHide(false);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAddLinkInputHide(false);
          } else {
            setIsAddLinkInputHide(true);
          }
        });
      },
      { threshold: 1, rootMargin: "-63px" }
    );
    const observerFooter = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAddLinkInputHide(false);
          } else {
            setIsAddLinkInputHide(true);
          }
        });
      },
      { threshold: 0 }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    if (footerTarget.current) {
      observerFooter.observe(footerTarget.current);
    }
    setInitialInputHide(true);
    return () => {
      observer.disconnect();
      observerFooter.disconnect();
    };
  }, [footerTarget]);

  return (
    <>
      <AddLinkContainer>
        <InputContainer>
          <AddLinkInput
            id="addLinkInput"
            type="text"
            placeholder="링크를 추가해 보세요"
          />
          <AddLinkButton onClick={handleAddModal}>추가하기</AddLinkButton>
        </InputContainer>

        {isAdd && (
          <ModalPortal>
            <Modal onModal={handleAddModal}>
              <ModalAdd />
            </Modal>
          </ModalPortal>
        )}
      </AddLinkContainer>

      <div ref={target} />
      {initialInputHide && isAddLinkInputHide && (
        <AddLinkContainer $hide={isAddLinkInputHide}>
          <InputContainer>
            <AddLinkInput
              id="addLinkInput"
              type="text"
              placeholder="링크를 추가해 보세요"
            />
            <AddLinkButton onClick={handleAddModal}>추가하기</AddLinkButton>
          </InputContainer>

          {isAdd && (
            <ModalPortal>
              <Modal onModal={handleAddModal}>
                <ModalAdd />
              </Modal>
            </ModalPortal>
          )}
        </AddLinkContainer>
      )}
    </>
  );
}
export default AddLink;
