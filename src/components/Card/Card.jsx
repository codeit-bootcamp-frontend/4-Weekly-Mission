import { useState } from 'react';
import nonePage from '../../assets/images/folderImgNone.png';
import { getRelativeTime, formatDateString } from '../../utils/timeUtils';
import StarIcon from '../icons/StarIcon';
import {
  CardGrid,
  CardLinkList,
  CardLinkImage,
  CardLinkContent,
  CardLinkTimeago,
  CardLinkDescription,
  CardLinkDatestring,
  CardLinkImageContainer,
  CardLinkInfoContainer,
  StarIconContainer,
} from './cardStyle';
import KebabDropdownMenu from '../KebabDropDownMenu';

const Card = ({ links }) => {
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const handleKebabClick = linkId => {
    setActiveDropdownId(prevId => (prevId === linkId ? null : linkId));
  };

  return (
    <CardGrid>
      {links.map(link => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardLinkList>
            <CardLinkImageContainer>
              <CardLinkImage
                src={link.imageSource || nonePage}
                alt={link.title}
              />
              <StarIconContainer>
                <StarIcon $isFavorited={false} />
              </StarIconContainer>
            </CardLinkImageContainer>
            <CardLinkContent>
              <CardLinkInfoContainer>
                <CardLinkTimeago dateTime={link.createdAt}>
                  {getRelativeTime(link.createdAt)}
                </CardLinkTimeago>
                <KebabDropdownMenu
                  isActive={activeDropdownId === link.id}
                  onClick={handleKebabClick}
                  linkId={link.id}
                  // onDelete={}
                  // onAddToFolder={}
                />
              </CardLinkInfoContainer>
              <CardLinkDescription>{link.description}</CardLinkDescription>
              <CardLinkDatestring dateTime={link.createdAt}>
                {formatDateString(link.createdAt)}
              </CardLinkDatestring>
            </CardLinkContent>
          </CardLinkList>
        </a>
      ))}
    </CardGrid>
  );
};

export default Card;
