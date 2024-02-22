import styled from 'styled-components';
import LinkCard from './LinkCard';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  @media (max-width: 767px) {
    row-gap: 2rem;
  }
`;

const FolderList = ({ folderList }) => (
  <List>
    {folderList.map(({ id, createdAt, url, description, imageSource }) => (
      <LinkCard key={id} url={url} createdAt={createdAt} desc={description} imgUrl={imageSource} />
    ))}
  </List>
);

export default FolderList;
