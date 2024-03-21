import { useRef } from 'react';
import CardUpdateStatus from '@/src/utils/CardUpdateStatus';
import CardDateFormat from '@/src/utils/CardDateFormat';
import Link from 'next/link';
import { CategoryDataType } from '@/src/type';
import {
  CardContentWrapper,
  CardImageWrapper,
  CardDate,
  CardImage,
  CardStatus,
  CardTitle,
  Wrapper,
  TopWrapper,
} from './Card.style';
import Kebab from '../Kebab/Kebab';

interface cardData {
  id: number | null;
  createdAt: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  imageSource: string | undefined;
}

interface folderDataType {
  title: string | null;
  id: string | null;
}

interface Props {
  page: string;
  card: null | cardData;
  folderData: CategoryDataType | null;
  currentFolder: folderDataType | null;
}

const Card = ({ page, card, folderData, currentFolder }: Props) => {
  const WrapperRef = useRef<HTMLDivElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);
  const date = card?.createdAt ? card?.createdAt : '';
  const cardCreationDate = CardDateFormat(date);
  const cardStatus = CardUpdateStatus(date);

  const handleCardMouseOver = () => {
    if (WrapperRef.current && ImageRef.current) {
      WrapperRef.current.style.border = '2px solid #6D6AFE';
      ImageRef.current.style.transform = 'scale(1.3)';
    }
  };

  const handleCardMouseOut = () => {
    if (WrapperRef.current && ImageRef.current) {
      WrapperRef.current.style.border = '0';
      ImageRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <Link href={card?.url ? card?.url : ''}>
      <Wrapper
        ref={WrapperRef}
        onMouseOver={handleCardMouseOver}
        onMouseOut={handleCardMouseOut}
      >
        <CardImageWrapper>
          <CardImage
            src={
              card?.imageSource ? card?.imageSource : '/images/hollowImage.png'
            }
            alt="이미지"
            width={340}
            height={200}
            ref={ImageRef}
          />
        </CardImageWrapper>
        <CardContentWrapper>
          <TopWrapper>
            <CardStatus>{cardStatus}</CardStatus>
            {page === 'folder' && (
              <Kebab
                cardID={card?.id ? card?.id : null}
                cardURL={card?.url ? card?.url : null}
                folderData={folderData}
                currentFolder={currentFolder}
              />
            )}
          </TopWrapper>
          <CardTitle>{card?.description}</CardTitle>
          <CardDate>{cardCreationDate}</CardDate>
        </CardContentWrapper>
      </Wrapper>
    </Link>
  );
};
export default Card;
