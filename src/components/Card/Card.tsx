import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import dayjs from 'dayjs';
import { BsThreeDots } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { UNDEFINED_IMAGE } from '../../constant/constant';
import Modal from '../Modal/Modal';
import PopOverButton from '../PopOverButton/PopOverButton';
import { CardProps } from './Card.types';
import styles from './Card.module.scss';

const Card = ({ createdAt, url, title, imageURL, bookmark, popover }: CardProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  const closeModal = () => {
    setSelectedItem(null);
  };
  const createdDay = dayjs(createdAt).format('YYYY-MM-DD');
  const timeAgo = createdAt ? formatDistanceToNow(createdAt, { addSuffix: true }) : '';

  const POPOVER_ITEMS = ['삭제하기', '폴더에 추가'];
  const POPOVER_MODALS = {
    [POPOVER_ITEMS[0]]: (
      <Modal title='링크 삭제' onClose={closeModal}>
        <p>http://tmp.com</p>
        <button className={styles.removeButton}>삭제하기</button>
      </Modal>
    ),
    [POPOVER_ITEMS[1]]: (
      <Modal title='폴더에 추가' onClose={closeModal}>
        <p>링크 주소</p>
        <button className={styles.addButton}>추가하기</button>
      </Modal>
    )
  };

  return (
    <article className={styles.layout}>
      <a href={url} target='_blank' rel='noreferrer noopener'>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src={imageURL || UNDEFINED_IMAGE}
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = event.target as HTMLImageElement;
              target.src = UNDEFINED_IMAGE;
            }}
            alt={title}
          />
        </div>
        {bookmark && <FaStar className={styles.starIcon} />}
        <div className={styles.textBox}>
          <div className={styles.timeBox}>
            <p className={styles.timeAgo}>{timeAgo}</p>
            {popover && (
              <PopOverButton items={POPOVER_ITEMS} onClick={handleItemClick}>
                <BsThreeDots className={styles.kebabIcon} />
              </PopOverButton>
            )}

            {selectedItem && POPOVER_MODALS[selectedItem]}
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}> {createdDay} </p>
        </div>
      </a>
    </article>
  );
};

export default Card;
