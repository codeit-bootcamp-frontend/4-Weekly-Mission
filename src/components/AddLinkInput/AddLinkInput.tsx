import { CSSProperties, useEffect, useRef, useState } from "react";
import AddLinkInputGlassIcon from "@/assets/svg/AddLinkInputGlassIcon";
import styles from "./AddLinkInput.module.scss";

export default function AddLinkInput() {
  const [isAddLinkInputVisible, setIsAddLinkInputVisible] = useState(true);
  const addLinkInputRef = useRef<HTMLElement>(null);

  const addLinkInputStyle: CSSProperties = !isAddLinkInputVisible
    ? {
        position: "fixed",
        bottom: "0px",
        padding: "24px 32px",
        width: "100%",
      }
    : {};

  // observer 시작
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAddLinkInputVisible(entry.isIntersecting);
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
          <AddLinkInputGlassIcon />
          <input
            className={styles.input}
            placeholder="링크를 추가해 보세요"
            type="text"
          />
        </div>
        <button className={styles.inputBtn}>추가하기</button>
      </form>
    </section>
  );
}
