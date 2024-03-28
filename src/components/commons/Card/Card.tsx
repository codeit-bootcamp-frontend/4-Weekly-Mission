import { useRef, useState } from 'react';
import CardUpdateStatus from '@/src/utils/CardUpdateStatus';
import CardDateFormat from '@/src/utils/CardDateFormat';
import Link from 'next/link';
import {
  CategoryDataType,
  cardDataType,
  currentFolderDataType,
} from '@/src/type';
import * as S from './Card.style';
import Kebab from '../Kebab/Kebab';

interface Props {
  page: string;
  card: null | cardDataType;
  folderData: CategoryDataType | null;
  currentFolder: currentFolderDataType | null;
}

const Card = ({ page, card, folderData, currentFolder }: Props) => {
  const WrapperRef = useRef<HTMLDivElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);
  const date = card?.createdAt ? card?.createdAt : '';
  const cardCreationDate = CardDateFormat(date);
  const cardStatus = CardUpdateStatus(date);
  const [imageURL, setImageURL] = useState(
    card?.imageSource ? card?.imageSource : '/images/hollowImage.png',
  );

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

  const failImageLoad = () => {
    setImageURL('/images/hollowImage.png');
  };

  return (
    <Link href={card?.url ? card?.url : ''}>
      <S.Wrapper
        ref={WrapperRef}
        onMouseOver={handleCardMouseOver}
        onMouseOut={handleCardMouseOut}
      >
        <S.CardImageWrapper>
          <S.CardImage
            src={imageURL}
            alt="이미지"
            width={340}
            height={200}
            ref={ImageRef}
            onError={failImageLoad}
          />
        </S.CardImageWrapper>
        <S.CardContentWrapper>
          <S.TopWrapper>
            <S.CardStatus>{cardStatus}</S.CardStatus>
            {page === 'folder' && (
              <Kebab
                cardID={card?.id ? card?.id : null}
                cardURL={card?.url ? card?.url : null}
                folderData={folderData}
                currentFolder={currentFolder}
              />
            )}
          </S.TopWrapper>
          <S.CardTitle>{card?.description}</S.CardTitle>
          <S.CardDate>{cardCreationDate}</S.CardDate>
        </S.CardContentWrapper>
      </S.Wrapper>
    </Link>
  );
};
export default Card;
