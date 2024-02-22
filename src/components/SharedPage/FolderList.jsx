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
    {folderList.map(folder => {
      const { id, url, description } = folder;
      // eslint-disable-next-line dot-notation
      const createdAt = folder.createdAt || folder['created_at'];
      // eslint-disable-next-line dot-notation
      const imageSource = folder.imageSource || folder['image_source'];

      return <LinkCard key={id} url={url} createdAt={createdAt} desc={description} imgUrl={imageSource} />;
    })}
  </List>
);

export default FolderList;
