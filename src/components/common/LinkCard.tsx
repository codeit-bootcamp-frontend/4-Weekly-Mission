import styled from 'styled-components';
import LinkImage, { ImageCard } from './LinkImage';
import LinkInfo, { InfoGroup } from './LinkInfo';

const LinkItem = styled.li`
  width: calc(100% / 3 - 4rem / 3);
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);

  @media (max-width: 1199px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover ${ImageCard} {
    transform: scale(1.3);
  }

  &:hover ${InfoGroup} {
    background-color: var(--color-gray-200);
  }
`;

interface LinkCardProps {
  url: string;
  createdAt: string;
  description: string;
  imageSource: string;
}

const LinkCard = ({ url, createdAt, description, imageSource }: LinkCardProps) => (
  <LinkItem>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <LinkImage image={imageSource} />
      <LinkInfo url={url} createdAt={createdAt} description={description} />
    </a>
  </LinkItem>
);

export default LinkCard;
