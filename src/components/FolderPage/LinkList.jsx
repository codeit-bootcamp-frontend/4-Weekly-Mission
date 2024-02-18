import styled from 'styled-components';
import LinkCard from '../LinkCard';
import iconShare from '../../assets/share.svg';
import iconPen from '../../assets/pen.svg';
import iconDelete from '../../assets/delete.svg';

const ButtonList = [
  {
    name: '공유',
    english: 'Share',
  },
  {
    name: '이름변경',
    english: 'Pen',
  },
  {
    name: '삭제',
    english: 'Delete',
  },
];

const ICON = {
  iconShare,
  iconPen,
  iconDelete,
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
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

const UpdateButtonList = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

const UpdateButton = styled.button`
  display: flex;
  gap: 0.4rem;
  line-height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-gray-600);
`;

const ButtonImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const LinkList = ({ links, selectedFolder }) => (
  <>
    <Header>
      <Title>{selectedFolder}</Title>
      {selectedFolder !== '전체' && (
        <UpdateButtonList>
          {ButtonList.map(({ name, english }) => (
            <li>
              <UpdateButton>
                <ButtonImg src={ICON[`icon${english}`]} alt={name} />
                {name}
              </UpdateButton>
            </li>
          ))}
        </UpdateButtonList>
      )}
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
