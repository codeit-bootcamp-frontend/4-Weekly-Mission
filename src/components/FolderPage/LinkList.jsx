import styled from 'styled-components';
import LinkCard from '../LinkCard';
import IconShare from '../../assets/share.svg';
import IconPen from '../../assets/delete.svg';
import IconDelete from '../../assets/pen.svg';

const ButtonList = [
  {
    name: '공유',
    image: IconShare,
  },
  {
    name: '이름변경',
    image: IconPen,
  },
  {
    name: '삭제',
    image: IconDelete,
  },
];

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
`;

const LinkListArea = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Button = styled.button`
  line-height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 600;
  &::before {
    content: '';
    display: block;
    margin-right: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    background: url(${backgroundImg => backgroundImg}) no-repeat center/contain;
  }
`;

const LinkList = ({ links, selectedFolder }) => (
  <>
    <Header>
      <Title>{selectedFolder}</Title>
      <ul>
        {ButtonList.map(button => (
          <Button backgroundImg={button.image}>{button.name}</Button>
        ))}
      </ul>
    </Header>
    {links.length ? (
      <LinkListArea>
        {links.map(({ id, url, created_at, description, image_source }) => (
          <li key={id}>
            <LinkCard url={url} createdAt={created_at} desc={description} imgUrl={image_source} />
          </li>
        ))}
      </LinkListArea>
    ) : (
      <span>저장된 링크가 없습니다</span>
    )}
  </>
);
export default LinkList;
