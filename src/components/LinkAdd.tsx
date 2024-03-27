import { useEffect, useRef, useState } from 'react';
import styles from '../css/LinkAdd.module.css'
import AddLinkModal from '../modal/AddLinkModal';

function LinkAdd() {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);

  const openAddLinkModal = () => setIsAddLinkModalOpen(true);
  const closeAddLinkModal = () => setIsAddLinkModalOpen(false);

  const [className, setClassName] = useState('headerBottom');
  const boxElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 관찰 대상이 viewport 안에 들어온 경우 'headerTop' 클래스를 설정
        if (entry.intersectionRatio > 0) {
          setClassName('headerTop');
        }
        // 그 외의 경우 'headerBottom' 클래스를 설정
        else {
          setClassName('headerBottom');
        }
      });
    });

    if (boxElRef.current) {
      io.observe(boxElRef.current);
    }

    return () => {
      // 컴포넌트가 언마운트되면 IntersectionObserver를 해제한다.
      io.disconnect();
    };
  }, []); // 한 번만 실행되어야 하므로 빈 배열을 두 번째 인자로 넘겨준다.

  return (
    <>
      <div id="linkAddBox" className={styles[className]}>
        <div className={styles.linkAdd}>
          <div className={styles.linkIcon}></div>
          <input type="text" name="linkAdd" placeholder="링크를 추가하세요" />
          <button className={styles.addButton} type="button" onClick={openAddLinkModal}>추가하기</button>
          <AddLinkModal isOpenModal={isAddLinkModalOpen} closeModal={closeAddLinkModal} />
        </div>
      </div>
      <div ref={boxElRef}></div>
    </>
  )
}

export default LinkAdd;