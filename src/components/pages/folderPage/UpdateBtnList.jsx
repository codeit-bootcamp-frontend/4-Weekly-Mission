import styled from 'styled-components';
import iconShare from '../../../assets/share.svg';
import iconPen from '../../../assets/pen.svg';
import iconDelete from '../../../assets/delete.svg';
import { modalTypes } from '../../../util/constants';

const ButtonList = [
  {
    modalName: 'share',
    name: '공유',
    imgUrl: iconShare,
  },
  {
    modalName: 'edit',
    name: '이름변경',
    imgUrl: iconPen,
  },
  {
    modalName: 'deleteFolder',
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

const UpdateBtnList = ({ handleModalBtnClick }) => (
  <>
    <UpdateButtonList>
      {ButtonList.map(({ modalName, name, imgUrl }) => (
        <li key={name}>
          <UpdateButton data-modal={modalTypes[modalName]} onClick={handleModalBtnClick}>
            <ButtonImg src={imgUrl} alt={name} />
            {name}
          </UpdateButton>
        </li>
      ))}
    </UpdateButtonList>
  </>
);
export default UpdateBtnList;
