import React, { useState, useEffect, useRef } from 'react';
import ListOfCard from './ListOfCard';
import styles from './carousel.module.scss';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);
  const carouselRef = useRef(null);

  const { current: carouselElement } = carouselRef;

  const cardWidth = 275;
  const gap = 20;

  // 스크롤 이벤트
  const handleScroll = () => {
    if (carouselElement) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselElement;
      const maxScrollLeft = scrollWidth - clientWidth;
      setIsLeftButtonVisible(scrollLeft > 0);
      setIsRightButtonVisible(scrollLeft < maxScrollLeft);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    handleScroll();
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll);
      return () => {
        carouselElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [carouselElement]);

  const slideTo = index => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      const newScrollLeft = (cardWidth + gap) * index;
      carouselRef.current.scrollLeft = newScrollLeft;
    }
  };

  // 카드 수 계산
  const calculateVisibleCards = () => {
    const wrapperWidth = carouselElement.clientWidth;
    const cardWidthWithGap = cardWidth + gap;
    return Math.floor(wrapperWidth / cardWidthWithGap);
  };

  // 버튼누르면 보이는 카드 갯수만큼 넘어가도록 수정
  const handlePrevClick = () => {
    const cardsToSlide = calculateVisibleCards();
    const newIndex = Math.max(currentIndex - cardsToSlide, 0);
    slideTo(newIndex);
  };

  // 버튼누르면 보이는 카드 갯수만큼 넘어가도록 수정
  const handleNextClick = () => {
    const cardsToSlide = calculateVisibleCards();
    const newIndex = Math.min(
      currentIndex + cardsToSlide,
      cards.length - cardsToSlide,
    );
    slideTo(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      {isLeftButtonVisible && (
        <button
          type="button"
          className={styles.prevButton}
          onClick={handlePrevClick}
        >
          <span>{'<'}</span>
        </button>
      )}
      <div
        className={styles.carouselWrapper}
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {cards.length === 0 ? (
          <p>No cards to display.</p>
        ) : (
          cards.map((card, index) => (
            <div
              key={card.id}
              className={styles.card}
              style={{
                marginRight: index !== cards.length - 1 ? `${gap}px` : 0,
              }}
            >
              <ListOfCard recipient={card} />
            </div>
          ))
        )}
      </div>
      {isRightButtonVisible && (
        <button
          type="button"
          className={styles.nextButton}
          onClick={handleNextClick}
        >
          <span>{'>'}</span>
        </button>
      )}
    </div>
  );
};

export default Carousel;
