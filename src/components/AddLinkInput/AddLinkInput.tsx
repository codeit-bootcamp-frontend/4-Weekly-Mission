import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./AddLinkInput.module.scss";
import InputIcon from "@/assets/svg/InputIcon";

export default function AddLinkInput() {
  const [isAddLinkInputVisible, setAddLinkInputVisible] = useState(true);
  const addLinkInputRef = useRef(null);

  const addLinkInputStyle: CSSProperties = !isAddLinkInputVisible
    ? {
        position: "fixed",
        bottom: "0px",
        padding: "24px 32px",
        width: "100%",
      }
    : {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAddLinkInputVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.01 }
    );

    const addLinkInput = addLinkInputRef.current;
    if (addLinkInput) {
      observer.observe(addLinkInput);
    }

    return () => {
      if (addLinkInput) {
        observer.unobserve(addLinkInput);
      }
    };
  }, []);

  return (
    <section
      className={styles.AddLinkInput}
      style={addLinkInputStyle}
      ref={addLinkInputRef}
    >
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <InputIcon />
          <input className={styles.input} placeholder="링크를 추가해 보세요" />
        </div>
        <button className={styles.inputBtn}>추가하기</button>
      </form>
      <div></div>
    </section>
  );
}
