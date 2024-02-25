import { useState, useEffect } from 'react';
import nonePage from '../../assets/images/folderImgNone.png';
import AddLink from '../FolderPage/LinkModal/AddLink';
import DeleteLink from '../FolderPage/LinkModal/DeleteLink';
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

const Card = ({ links, folders }) => {
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const [standardizedLinks, setStandardizedLinks] = useState([]);
  const [modal, setModal] = useState({
    isOpen: false,
    type: null,
    linkId: null,
    linkUrl: null,
  });

  useEffect(() => {
    setStandardizedLinks(links.map(standardizeLinkData));
  }, [links]);

  const handleKebabClick = linkId => {
    setActiveDropdownId(prevId => (prevId === linkId ? null : linkId));
  };

  const handleCardDelete = linkId => {
    const link = standardizedLinks.find(link => link.id === linkId);
    setModal({
      isOpen: true,
      type: 'delete',
      linkId: linkId,
      linkUrl: link.url,
    });
  };

  const handleAddCardClick = linkId => {
    const link = standardizedLinks.find(link => link.id === linkId);
    setModal({ isOpen: true, type: 'add', linkId: linkId, linkUrl: link.url });
  };

  const closeModal = linkId => {
    setModal({ isOpen: false, type: null, linkId: null, linkUrl: null });
  };

  return (
    <>
      {modal.isOpen && modal.type === 'add' && (
        <AddLink
          linkId={modal.linkId}
          linkUrl={modal.linkUrl}
          folders={folders}
          onClose={closeModal}
        />
      )}
      {modal.isOpen && modal.type === 'delete' && (
        <DeleteLink
          linkId={modal.linkId}
          linkUrl={modal.linkUrl}
          onClose={closeModal}
        />
      )}
      {standardizedLinks.length > 0 ? (
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
                      onDelete={() => handleCardDelete(link.id)}
                      onAddToFolder={() => handleAddCardClick(link.id)}
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
        <CardEmptyText>저장된 링크가 없습니다.</CardEmptyText>
      )}
    </>
  );
};

export default Card;
