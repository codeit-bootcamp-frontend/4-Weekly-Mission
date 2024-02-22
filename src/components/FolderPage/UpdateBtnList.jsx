import styled from 'styled-components';
import iconShare from '../../assets/share.svg';
import iconPen from '../../assets/pen.svg';
import iconDelete from '../../assets/delete.svg';

const ButtonList = [
  {
    name: '공유',
    imgUrl: iconShare,
  },
  {
    name: '이름변경',
    imgUrl: iconPen,
  },
  {
    name: '삭제',
    imgUrl: iconDelete,
  },
];

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

const UpdateBtnList = () => (
  <UpdateButtonList>
    {ButtonList.map(({ name, imgUrl }) => (
      <li key={name}>
        <UpdateButton>
          <ButtonImg src={imgUrl} alt={name} />
          {name}
        </UpdateButton>
      </li>
    ))}
  </UpdateButtonList>
);

export default UpdateBtnList;
