import nonePage from '../../assets/images/folderImgNone.png';
import { getRelativeTime, formatDateString } from '../../utils/timeUtils';
import {
  CardGrid,
  CardLinkList,
  CardLinkImage,
  CardLinkContent,
  CardLinkTimeago,
  CardLinkDescription,
  CardLinkDatestring,
} from './cardStyle';

const Card = ({ links }) => {
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
            <CardLinkImage
              src={link.imageSource || nonePage}
              alt={link.title}
            />
            <CardLinkContent>
              <CardLinkTimeago dateTime={link.createdAt}>
                {getRelativeTime(link.createdAt)}
              </CardLinkTimeago>
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
