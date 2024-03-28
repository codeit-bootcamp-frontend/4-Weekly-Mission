import cardStyles from './Card.module.css';
import starOff from '../../../assets/starOff.svg';
import kebab from '../../../assets/kebab.svg';
import defaultImg from '../../../assets/defaultCardImg.svg';
import ModalPortal from '../../../utils/ModalPortal';
import { formatAgo, formatDate } from './dateFormat';
import { useState } from 'react';
import { DeleteLink } from '../modal/DeleteLink';

interface NewLink {
  created_at: string;
  description: string;
  id: number;
  image_source: string;
  title: string;
  url: string;
}
interface Props {
  card: NewLink;
}
const Card: React.FC<Props> = ({ card }) => {
  const [popover, setPopover] = useState(false);
  const [deleteModal, setDeleteModal] = useState<[boolean, string]>([
    false,
    '',
  ]);

  if (!card) {
    return <div>잘못된 카드 정보입니다.</div>;
  }

  const handleDeleteModal = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setDeleteModal([!deleteModal[0], deleteModal[1]]);
  };

  function handleClickCard(url: string) {
    window.open(url, '_blank');
  }
  function handleClickKebab(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation();
    setPopover(!popover);
    setDeleteModal([false, '']);
  }
  function handleClickDelete(url: string) {
    setDeleteModal([true, url]);
    setPopover(false);
  }

  return (
    <div
      className={cardStyles.form}
      onClick={() => handleClickCard(`${card.url}`)}
    >
      {card[`image_source`] ? (
        <img
          className={cardStyles.image}
          src={card[`image_source`]}
          alt={card.title}
        />
      ) : (
        <img className={cardStyles.image} src={defaultImg} alt={card.title} />
      )}
      <img className={cardStyles.star} src={starOff} alt="별 아이콘" />
      <div className={cardStyles.info}>
        <div className={cardStyles.ago}>{formatAgo(card[`created_at`])}</div>
        <img
          className={cardStyles.kebab}
          onClick={handleClickKebab}
          src={kebab}
          alt="케밥 아이콘"
        />
        {popover && (
          <div
            className={cardStyles.popover}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className={cardStyles.delete}
              onClick={(e) => {
                e.stopPropagation();
                handleClickDelete(card.url);
              }}
            >
              삭제하기
            </div>
            <div className={cardStyles.add}>폴더에 추가</div>
          </div>
        )}
        <div className={cardStyles.text}>{card.description}</div>
        <div className={cardStyles.date}>{formatDate(card[`created_at`])}</div>
      </div>
      {deleteModal[0] && (
        <ModalPortal>
          {
            <DeleteLink
              url={deleteModal[1]}
              onClickOutside={handleDeleteModal}
            />
          }
        </ModalPortal>
      )}
    </div>
  );
};

export { Card };
