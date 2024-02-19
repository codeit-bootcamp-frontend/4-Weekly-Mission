import { useState, useEffect } from 'react';
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
  CardEmptyText,
} from './cardStyle';
import KebabDropdownMenu from '../KebabDropDownMenu';

const standardizeLinkData = link => ({
  id: link.id,
  createdAt: link.createdAt || link.created_at,
  description: link.description,
  imageSource: link.imageSource || link.image_source || nonePage,
  title: link.title,
  url: link.url,
  updatedAt: link.updatedAt || link.updated_at,
});

const Card = ({ links }) => {
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [standardizedLinks, setStandardizedLinks] = useState([]);

  useEffect(() => {
    setStandardizedLinks(links.map(standardizeLinkData));
  }, [links]);

  const handleKebabClick = linkId => {
    setActiveDropdownId(prevId => (prevId === linkId ? null : linkId));
  };

  return standardizedLinks && standardizedLinks.length > 0 ? (
    <CardGrid>
      {standardizedLinks.map(link => (
        <CardLinkList key={link.id}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <CardLinkImageContainer>
              <CardLinkImage src={link.imageSource} alt={link.title} />
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
                />
              </CardLinkInfoContainer>
              <CardLinkDescription>{link.description}</CardLinkDescription>
              <CardLinkDatestring dateTime={link.createdAt}>
                {formatDateString(link.createdAt)}
              </CardLinkDatestring>
            </CardLinkContent>
          </a>
        </CardLinkList>
      ))}
    </CardGrid>
  ) : (
    <CardEmptyText>저장된 링크가 없습니다</CardEmptyText>
  );
};

export default Card;
