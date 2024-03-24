import styled from 'styled-components';
import LinkCard from '../../common/LinkCard';
import { Link } from '../../../types/types';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  @media (max-width: 767px) {
    row-gap: 2rem;
  }
`;

const NoLinks = styled.p`
  padding: 4.1rem 0 3.5rem;
  width: 100%;
  line-height: 2.4rem;
  font-size: 1.6rem;
  text-align: center;
`;

const FolderList = ({ folderList }: { folderList: Link[] }) => (
  <>
    {folderList.length === 0 ? (
      <NoLinks>저장된 링크가 없습니다</NoLinks>
    ) : (
      <List>
        {folderList.map(({ id, url, description, createdAt, imageSource }) => (
          <LinkCard key={id} url={url} createdAt={createdAt} description={description} imageSource={imageSource} />
        ))}
      </List>
    )}
  </>
);

export default FolderList;
